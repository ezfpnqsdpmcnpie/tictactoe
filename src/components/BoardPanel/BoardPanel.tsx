import { useEffect } from "react";
import { GAME_SIZE } from "../../constants"
import useGameStatus from "../../hooks/useGameStatus";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { opponentTurn, setCell } from "../../store/slice/gameData/gameData";
import { setWinner } from "../../store/slice/winningData/winningData";

export const BoardPanel = () => {
    const dispatch = useAppDispatch();

    const selectedSymbol: string = useAppSelector(state => state.gameData.symbol) as string;
    const boardData: string[] = useAppSelector(state => state.gameData.boardData);
    const isOpponentTurn: boolean = useAppSelector(state => state.gameData.isOpponentTurn);

    const gameStatus: string | null = useGameStatus();

    useEffect(() => {
        const winner: string | null = gameStatus;
        if(winner === null && isOpponentTurn){
            dispatch(opponentTurn());
        }
        else{
            dispatch(setWinner({name: winner}));
        }
    }, [boardData]);

    return (
        <>
            <div className="flex flex-col h-full w-full justify-around p-5">
                {Array.from({ length: GAME_SIZE }).map((_, iRow: number) => (
                    <div key={iRow} className="flex h-full justify-around">
                        {Array.from({ length: GAME_SIZE}).map((_, iCol: number) => {
                            const iCell: number = iRow * GAME_SIZE + iCol;
                            return <p
                                    key={iCell}
                                    className={`w-full border border-[var(--text)] font-bold bg-white flex items-center justify-center cursor-pointer`}
                                    style={{
                                        fontSize: `${300 / GAME_SIZE}px`,
                                        color: `var(${boardData[iCell] === selectedSymbol ? "--first-symbol-color" : "--second-symbol-color"})`
                                    }}
                                    onClick={() => boardData[iCell] === "" && dispatch(setCell({ index: iCell }))}
                                    >
                                        {boardData[iCell]}
                                    </p>
                        })}
                    </div>
                ))}
            </div>
        </>
    )
}