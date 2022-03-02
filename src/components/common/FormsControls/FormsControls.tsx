import { WrappedFieldMetaProps } from 'redux-form';
import styles from './FormsControls.module.scss';

type TextareaPropsType = {
    input: string
    meta: WrappedFieldMetaProps
}

export const Textarea: React.FC<TextareaPropsType> = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (showError ? styles.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            <div>
                {showError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Input: React.FC<TextareaPropsType> = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (showError ? styles.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            <div>
                {showError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}