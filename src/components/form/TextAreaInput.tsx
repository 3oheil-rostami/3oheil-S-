import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    icon?: ReactNode;
    label?: ReactNode;
    topEnd?: ReactNode;
    errorMessage?: ReactNode;
    bottomEnd?: ReactNode;
} & ComponentProps<'textarea'>

const TextAreaInput = ({ icon, className, label, topEnd, errorMessage, bottomEnd, ...reset }: Props) => {
    return (
        <label className="form-control">
            <div className="label empty:*:hidden">
                <span className="label-text">{label}</span>
                <span className="label-text-alt">{topEnd}</span>
            </div>
            <textarea className={twMerge("textarea textarea-bordered h-24 w-full max-h-full", className)} {...reset} />
            <div className="label empty:*:hidden">
                <span className="label-text-alt">{errorMessage}</span>
                <span className="label-text-alt">{bottomEnd}</span>
            </div>
        </label>
    )
}

export default TextAreaInput