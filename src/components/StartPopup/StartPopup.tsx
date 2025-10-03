import type { JSX } from "react";
import { SYMBOLS } from "../../constants";
import { useAppDispatch } from "../../store/hooks"
import { setSymbol } from "../../store/slice/gameData/gameData";
import { Button } from "../Button";

/**
 * Popup to choose the user symbol before starting the game
 * 
 * @returns {JSX.Element} A popup element
 */
export const StartPopup = (): JSX.Element => {
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="flex flex-col items-center bg-[var(--background)] text-2xl py-7 px-15 border border-[var(--secondary-background)] rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <p className="text-3xl underline font-bold">TIC TAC TOE</p>
                <p className="mt-5 mb-10">Veuillez choisir votre symbole :</p>
                <div className="flex w-full justify-around">
                    {SYMBOLS.map((value: string) => (
                        <Button
                            key={value}
                            name={value}
                            action={() => dispatch(setSymbol({symbol: value}))}/>
                    ))}
                </div>
            </div>
        </>
    )
}