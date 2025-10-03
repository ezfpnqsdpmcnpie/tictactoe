import type { JSX } from "react"
import type { ButtonPropsInterface } from "./Button.type"

/**
 * Custom button
 * 
 * @param {ButtonPropsInterface} props - The props for the Button component
 * @param {string} props.name - The text to display inside the button
 * @param {() => void} props.action - Function to execute when the button is clicked
 * 
 * @returns {JSX.Element} A styled button element
 */
export const Button = (props: ButtonPropsInterface): JSX.Element => {
    return (
        <>
            <button onClick={props.action} className="bg-[var(--secondary-background)] py-2 px-5 text-xl font-bold cursor-pointer rounded-lg">{props.name}</button>
        </>
    )
}