import { createSlice } from "@reduxjs/toolkit";
import { GAME_SIZE } from "../../../constants";
import type { winningDataInterface } from "./winningData.type";

const initialState: winningDataInterface = {
    winningCombinations : [],
    winner: null,
}

/**
 * Redux slice who contains each game status data
 */

export const winningDataslice = createSlice({
    name:'winningData',
    initialState: initialState,
    reducers:{
        /**
         * Set all winning combinations with the defined game size
         */
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
        /**
         * Define the name of the winner or whether it is a draw
         * @param {string} payload.name - Draw if it is a draw, or the name of the winner
         */
        setWinner: (state, action) => {
            state.winner = action.payload.name
        },
        /**
         * Reset all data to restart the game
         */
        resetGame: (state) => {
            state.winner = null
        }
    },
})

export const {setWinningCombinations, setWinner, resetGame} = winningDataslice.actions
export default winningDataslice.reducer