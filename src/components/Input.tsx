import { forwardRef } from "react";

type InputProps = {
    type?: string;
    label: string;
    error?: { message?: string };
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ type = 'text', label, error, ...otherProps }, ref) => {
    return (
        <div className="form__group">
            <label>{label}</label>
            <input ref={ref} type={type} {...otherProps} autoComplete="off" />
            <span className="form__message">{error?.message || ''}</span>
        </div>
    );
});

export default Input;