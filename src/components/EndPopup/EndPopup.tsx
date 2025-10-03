import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { resetGame } from "../../store/slice/gameData/gameData";
import { Button } from "../Button"

export const EndPopup = () => {
    const dispatch = useAppDispatch();

    const winner: string = useAppSelector(state => state.winningData.winner) as string;
    const selectedSymbol: string = useAppSelector(state => state.gameData.symbol) as string;
    return (
        <>
            <div className="flex flex-col items-center bg-[var(--background)] text-2xl py-7 px-15 border border-[var(--secondary-background)] rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <p className="text-2xl mb-10">{winner === "draw" ? "Match null" : "Vous avez " + (winner === selectedSymbol ? "gagné" : "perdu") + " !"}</p>
                <Button name={'RESTART'} action={() => dispatch(resetGame())} />
            </div>
        </>
    )
}