import React from 'react';
import styles from './FormsControls.module.scss';

export const Textarea = ({input, meta, ...props}) => {
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

export const Input = ({input, meta, ...props}) => {
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