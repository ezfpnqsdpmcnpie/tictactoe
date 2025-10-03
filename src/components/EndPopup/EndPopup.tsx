import type { JSX } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { resetGame as resetBoardData } from "../../store/slice/gameData/gameData";
import { resetGame as resetWinningData } from "../../store/slice/winningData/winningData";
import { Button } from "../Button"

/**
 * Popup to inform the game status : draw or if the user win the game
 * 
 * @returns {JSX.Element} A popup element
 */
export const EndPopup = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const winner: string = useAppSelector(state => state.winningData.winner) as string;
    const selectedSymbol: string = useAppSelector(state => state.gameData.symbol) as string;
    return (
        <>
            <div className="flex flex-col items-center bg-[var(--background)] text-2xl py-7 px-15 border border-[var(--secondary-background)] rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <p className="text-2xl mb-10">{winner === "draw" ? "Match null" : "Vous avez " + (winner === selectedSymbol ? "gagné" : "perdu") + " !"}</p>
                <Button name={'RESTART'} action={() => {
                    dispatch(resetBoardData())
                    dispatch(resetWinningData())
                }}/>
            </div>
        </>
    )
}