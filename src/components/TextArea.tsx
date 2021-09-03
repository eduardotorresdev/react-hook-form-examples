import { forwardRef } from "react";

type TextAreaProps = {
    label: string;
    error?: { message?: string }
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ label, error, ...otherProps }, ref) => {
    return (
        <div className="form__group">
            <label>{label}</label>
            <textarea ref={ref} {...otherProps} />
            <span className="form__message">{error?.message || ''}</span>
        </div>
    );
});

export default TextArea;