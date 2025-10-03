import { createSlice } from "@reduxjs/toolkit";
import type { gameDataInterface } from "./gameData.type";
import { GAME_SIZE, SYMBOLS } from "../../../constants";

const initialState: gameDataInterface = {
    symbol: null,
    boardData: Array(Math.pow(GAME_SIZE, 2)).fill(""),
    isOpponentTurn: false,
}

export const gameDataSlice = createSlice({
    name:'gameData',
    initialState: initialState,
    reducers:{
        setSymbol: (state, action) => {
            state.symbol = action.payload.symbol;
        },
        setCell: (state, action) => {
            state.isOpponentTurn = true;
            state.boardData[action.payload.index] = state.symbol as string;
        },
        opponentTurn: (state) => {
            state.isOpponentTurn = false;
            const emptyCells: number[] = state.boardData
                                .map((value, index) => (value === "" ? index : null))
                                .filter(index => index !== null);
            
            const randomIndex: number = Math.floor(Math.random() * emptyCells.length);

            state.boardData[emptyCells[randomIndex]] = SYMBOLS.find(symbol => symbol !== state.symbol) as string;
        },
        retryGame: (state) => {
            state.boardData = Array(Math.pow(GAME_SIZE, 2)).fill("");
            state.isOpponentTurn = false;
        },
        resetGame: () => initialState,
    },
})

export const {setSymbol, setCell, opponentTurn, retryGame, resetGame} = gameDataSlice.actions
export default gameDataSlice.reducer