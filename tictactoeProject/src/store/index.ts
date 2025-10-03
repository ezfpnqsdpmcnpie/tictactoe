import { configureStore } from '@reduxjs/toolkit'
import gameDataReducer from './slice/gameData/gameData'
import winningDataReducer from './slice/winningData/winningData'

export const store = configureStore({
  reducer: {
    gameData: gameDataReducer,
    winningData: winningDataReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;