export type FieldValidateType = (value: string) => string | undefined

export const required: FieldValidateType = (value) => {
    if (value) return undefined;
    return 'Field is required';
}

export const maxLenghtCreator = (maxLenght: number): FieldValidateType => (value) => {
    if (value && value.length > maxLenght) return `Max length is ${maxLenght} symbols`;
}