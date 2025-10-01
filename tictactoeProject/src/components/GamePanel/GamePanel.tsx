import { GAME_SIZE } from "../../constants"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setCell } from "../../store/slice/data/data";

export const GamePanel = () => {
    const dispatch = useAppDispatch();

    const selectedSymbol: string = useAppSelector(state => state.data.symbol) as string;
    const gameData: string[] = useAppSelector(state => state.data.gameData);

    return (
        <>
            <div className="flex flex-col h-full w-full justify-around p-5">
                {Array.from({ length: GAME_SIZE }).map((_, iRow) => (
                    <div key={iRow} className="flex h-full justify-around">
                        {Array.from({ length: GAME_SIZE}).map((_, iCol) => {
                            const iCell = iRow * GAME_SIZE + iCol;
                            return <p
                                    key={iCell}
                                    className={`w-full border bg-white flex items-center justify-center text-[100px] bg-[var(${gameData[iCell] === selectedSymbol ? "first-symbol-color" : "second-symbol-color"})] ${gameData[iCell] === "" && "cursor-pointer"}`}
                                    onClick={() => gameData[iCell] === "" && dispatch(setCell({index: iCell}))}
                                    >
                                        {gameData[iCell]}
                                    </p>
                        })}
                    </div>
                ))}
            </div>
        </>
    )
}