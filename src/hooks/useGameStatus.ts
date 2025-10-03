import { useAppSelector } from "../store/hooks";

/**
 * Hook to check whether a draw or a winner has been found
 * @returns {string | null}
 * - 'symbol' : the symbol of the winner if a winning combination is found
 * - 'draw' : if all cells are filled and there is no winner
 * - null : if the game is still ongoing
 */
const useGameStatus: () => string | null = () => {

    const boardData: string[] = useAppSelector(state => state.gameData.boardData);
    const winningCombinations: number[][] = useAppSelector(state => state.winningData.winningCombinations);

    const hasEmptyCells: boolean = boardData.some(cell => cell === "");

    for (const combination of winningCombinations) {
        const firstCell: string = boardData[combination[0]];
        if(firstCell !== ""){
            const allSame: boolean = combination.every(index => boardData[index] === firstCell);
            if(allSame){
                return firstCell;
            }
        }
    }
    if(hasEmptyCells){
        return null;
    }
    else{
        return "draw";
    }
}

export default useGameStatus;