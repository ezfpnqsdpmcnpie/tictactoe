import { useAppSelector } from "../store/hooks";

const useGameStatus: () => string | null = () => {

    const boardData = useAppSelector(state => state.gameData.boardData);
    const winningCombinations = useAppSelector(state => state.winningData.winningCombinations);

    const hasEmptyCells = boardData.some(cell => cell === "");

    for (const combination of winningCombinations) {
        const firstCell: string = boardData[combination[0]];
        if(firstCell !== ""){
            const allSame = combination.every(index => boardData[index] === firstCell);
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