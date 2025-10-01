import { useAppDispatch } from "../../store/hooks"
import { resetGame } from "../../store/slice/data/data";
import { Button } from "../Button"

export const EndPopup = () => {
    const dispatch = useAppDispatch();
    return (
        <>
            <div className="flex flex-col items-center bg-[var(--background)] text-2xl py-7 px-15 border border-[var(--secondary-background)] rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <p className="text-2xl mb-10">{true ? "Match null" : "Vous avez " + (true ? "gagné" : "perdu") + " !"}</p>
                <Button name={'RESTART'} action={() => dispatch(resetGame())} />
            </div>
        </>
    )
}