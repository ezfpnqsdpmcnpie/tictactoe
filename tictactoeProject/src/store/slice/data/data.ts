import { createSlice } from "@reduxjs/toolkit";
import type { dataInterface } from "./data.type";
import { GAME_SIZE, SYMBOLS } from "../../../constants";

const initialState: dataInterface = {
    winningCombinations : [],
    symbol: null,
    gameData: Array(Math.pow(GAME_SIZE, 2)).fill(""),
    winner: null,
}

export const dataSlice = createSlice({
    name:'gameData',
    initialState: initialState,
    reducers:{
        setWinningCombinations: (state) => {
            /**
             * First diagonal
             */
            let combination: number[] = [];
            let firstIndex: number = 0;

            combination.push(firstIndex);

            for(let i: number = 0; i < GAME_SIZE - 1; i++){
                combination.push(combination[i] + GAME_SIZE + 1)
            }

            state.winningCombinations.push(combination);

            /**
             * Second diagonal
             */
            combination = [];
            firstIndex = GAME_SIZE - 1;

            combination.push(firstIndex);

            for(let i: number = 0; i < GAME_SIZE - 1; i++){
                combination.push(combination[i] + GAME_SIZE - 1)
            }
            
            state.winningCombinations.push(combination);

            /**
             * Each rows
             */
            let i: number = 0;
            while(i < Math.pow(GAME_SIZE, 2)){
                combination = [];

                for(let j: number = 0; j < GAME_SIZE; j++){
                    combination.push(i);
                    i++;
                }

                state.winningCombinations.push(combination);
            }

            /**
             * Each columns
             */
            for(let i: number = 0; i < GAME_SIZE; i++){
                combination = [];

                for(let j: number = i; j < Math.pow(GAME_SIZE, 2); j += GAME_SIZE){
                    combination.push(j);
                }

                state.winningCombinations.push(combination);
            }
        },
        setSymbol: (state, action) => {
            state.symbol = action.payload.symbol;
        },
        setCell: (state, action) => {
            state.gameData[action.payload.index] = state.symbol as string;
        },
        opponentTurn: (state) => {
            const emptyCells: number[] = state.gameData
                                .map((value, index) => (value === "" ? index : null))
                                .filter(index => index !== null);
            
            const randomIndex: number = Math.floor(Math.random() * emptyCells.length);

            state.gameData[emptyCells[randomIndex]] = SYMBOLS.find(symbol => symbol !== state.symbol) as string;
        },
        setWinner: (state, action) => {
            state.winner = action.payload.name
        },
        retryGame: (state) => {
            state.gameData = Array(Math.pow(GAME_SIZE, 2)).fill("");
        },
        resetGame: () => initialState,
    },
})

export const {setWinningCombinations, setSymbol, setCell, opponentTurn, setWinner, retryGame, resetGame} = dataSlice.actions
export default dataSlice.reducer