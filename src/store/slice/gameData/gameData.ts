import { createSlice } from "@reduxjs/toolkit";
import type { gameDataInterface } from "./gameData.type";
import { GAME_SIZE, SYMBOLS } from "../../../constants";

const initialState: gameDataInterface = {
    symbol: null,
    boardData: Array(Math.pow(GAME_SIZE, 2)).fill(""),
    isOpponentTurn: false,
}

/**
 * Redux slice who contains user & board data
 */

export const gameDataSlice = createSlice({
    name:'gameData',
    initialState: initialState,
    reducers:{
        /**
         * Set the user symbol
         * @param {string} payload.symbol - Selected user symbol
         */
        setSymbol: (state, action) => {
            state.symbol = action.payload.symbol;
        },
        /**
         * Define the cell selected by the user by its symbol & define that it is the opponent's turn
         * @param {string} payload.index - Cell id
         */
        setCell: (state, action) => {
            state.isOpponentTurn = true;
            state.boardData[action.payload.index] = state.symbol as string;
        },
        /**
         * Select a random available cell to set the opponent symbol & define that it is the user turn
         */
        opponentTurn: (state) => {
            state.isOpponentTurn = false;
            const emptyCells: number[] = state.boardData
                                .map((value, index) => (value === "" ? index : null))
                                .filter(index => index !== null);
            
            const randomIndex: number = Math.floor(Math.random() * emptyCells.length);

            state.boardData[emptyCells[randomIndex]] = SYMBOLS.find(symbol => symbol !== state.symbol) as string;
        },
        /**
         * Reset spécifique data to retry the current game
         */
        retryGame: (state) => {
            state.boardData = Array(Math.pow(GAME_SIZE, 2)).fill("");
            state.isOpponentTurn = false;
        },
        /**
         * Reset all data to restart the game
         */
        resetGame: () => initialState,
    },
})

export const {setSymbol, setCell, opponentTurn, retryGame, resetGame} = gameDataSlice.actions
export default gameDataSlice.reducer