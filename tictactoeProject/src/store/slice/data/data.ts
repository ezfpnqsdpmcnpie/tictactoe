import { createSlice } from "@reduxjs/toolkit";
import type { dataInterface } from "./data.type";
import { GAME_SIZE } from "../../../constants";

const initialState: dataInterface = {
    symbol: null,
    gameData: Array(Math.pow(GAME_SIZE, 2)).fill("")
}

export const dataSlice = createSlice({
    name:'gameData',
    initialState: initialState,
    reducers:{
        setSymbol: (state, action) => {
            state.symbol = action.payload.symbol;
        },
        setCell: (state, action) => {
            state.gameData[action.payload.index] = state.symbol as string;
        },
        retryGame: (state) => {
            state.gameData = Array(Math.pow(GAME_SIZE, 2)).fill("");
        },
        resetGame: () => initialState,
    },
})

export const {setSymbol, setCell, retryGame, resetGame} = dataSlice.actions
export default dataSlice.reducer