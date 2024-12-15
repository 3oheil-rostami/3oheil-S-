import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
    icon?: ReactNode;
    label?: ReactNode;
    topEnd?: ReactNode;
    errorMessage?: ReactNode;
    bottomEnd?: ReactNode;
    button?: ReactNode
    containerClassName?: string

} & ComponentProps<'input'>

const Input2 = ({ icon, className, label, topEnd, errorMessage, bottomEnd, button, containerClassName, ...reset }: Props) => {

    return (
        <label className={twMerge("form-control w-full", containerClassName)}>
            <div className="label empty:*:hidden">
                <span className="label-text">{label}</span>
                <span className="label-text-alt">{topEnd}</span>
            </div>
            <div className='input input-bordered flex items-center gap-2'>
                {icon}
                <input className={twMerge("grow", className)} {...reset} />
                {button && button}
            </div>
            <div className="label empty:*:hidden">
                <span className="label-text-alt text-error">{errorMessage}</span>
                <span className="label-text-alt">{bottomEnd}</span>
            </div>
        </label>
    )
}

export default Input2