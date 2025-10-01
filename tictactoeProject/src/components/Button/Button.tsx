import type { ButtonPropsInterface } from "./Button.type"

export const Button = (props: ButtonPropsInterface) => {
    return (
        <>
            <button onClick={props.action} className="bg-[var(--secondary-background)] py-2 px-5 text-xl font-bold cursor-pointer rounded-lg">{props.name}</button>
        </>
    )
}