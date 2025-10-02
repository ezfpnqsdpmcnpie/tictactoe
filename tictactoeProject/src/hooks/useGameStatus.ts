import { useAppSelector } from "../store/hooks";

const useGameStatus: () => string | null = () => {

    const gameData = useAppSelector(state => state.data.gameData);
    const winningCombinations = useAppSelector(state => state.data.winningCombinations);

    const hasEmptyCells = gameData.some(cell => cell === "");

    for (const combination of winningCombinations) {
        const firstCell: string = gameData[combination[0]];

        if(firstCell !== ""){
            const allSame = combination.every(index => gameData[index] === firstCell);

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