export const composeValidators = (...validators) => (value) => {
  return validators.reduce((error, validator) => error || validator(value), undefined);
}

export const required = value => {
    if (value) return undefined;
    return 'Field is required';
}

export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value && value.length > maxLenght) return `Max length is ${maxLenght} symbols`;
}