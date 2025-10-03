import { useAppDispatch, useAppSelector } from "./store/hooks"
import { StartPopup } from "./components/StartPopup";
import { EndPopup } from "./components/EndPopup";
import { Button } from "./components/Button";
import { resetGame as resetBoardData, retryGame } from "./store/slice/gameData/gameData";
import { resetGame as resetWinningData } from "./store/slice/winningData/winningData";
import { BoardPanel } from "./components/BoardPanel";
import { useEffect } from "react";
import { setWinningCombinations } from "./store/slice/winningData/winningData";

function App() {
  const dispatch = useAppDispatch();
  
  const isStart: boolean = useAppSelector(state => state.gameData.symbol) === null;
  const isEnd: boolean = useAppSelector(state => state.winningData.winner) !== null;

  useEffect(() => {
    dispatch(setWinningCombinations());
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center">
        <p className="text-[40px] underline font-bold p-10">Tic Tac Toe</p>
        <div className="flex w-full h-full">
          <div className="w-2/3">
            <BoardPanel/>
          </div>
          <div className="flex flex-col h-full items-center justify-center gap-25 w-1/3">
            <Button name={"RESET"} action={() => dispatch(retryGame())}/>
            <Button name={"LEAVE"} action={() => {
                dispatch(resetBoardData())
                dispatch(resetWinningData())
              }}/>
          </div>
        </div>
        {(isStart || isEnd) &&
          <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md">
            {isStart && <StartPopup/>}
            {isEnd && <EndPopup/>}
          </div>
        }
      </div>
    </>
  )
}

export default App
