import { MouseEventHandler, ReactNode } from "react";

interface IButton {
    disabled?: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>,
    className?: string,
    children: string | ReactNode
}

export default function Button({ disabled, onClick, className, children }: IButton) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={className}>
            {children}
        </button>
    )
}