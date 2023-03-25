import React, { Fragment } from 'react'
import logo from './logo.svg'
import './App.css'
import MetamaskConnect from './components/MetamaskConnect'
import Loader from './components/Loader'
import { useSelector } from 'react-redux'
import JoinToGameForm, {
  shouldBeShown as shouldBeShownJoinForm,
} from './components/JoinToGameForm'
import { RootState } from './state/store'
import StartGameForm, {
  shouldBeShown as shouldBeShownStargtGameForm,
} from './components/StartGameForm'
import WaitOpponentScreen, {
  shouldBeShown as shouldBeShownWaitOpponentScreen,
} from './components/WaitOpponentScreen'
import MakeMoveForm, {
  shouldBeShown as shouldBeShownMakeMoveForm,
} from './components/MakeMoveForm'
import WaitGameFinishScreen, {
  shouldBeShown as shouldBeShownWaitGameFinishScreen,
} from './components/WaitGameFinishScreen'
import ResultScreen, {
  shouldBeShown as shouldBeShownResultScreen,
} from './components/ResultScreen'

type State = {
  shouldBeShownJoinForm: boolean
  shouldBeShownStartGameForm: boolean
  shouldBeShownMakeMoveForm: boolean
  shouldBeShownWaitOpponentScreen: boolean
  shouldBeShownWaitGameFinishScreen: boolean
  shouldBeShownResultScreen: boolean
}

function App() {
  const state = useSelector<RootState, State>((state) => ({
    shouldBeShownJoinForm: shouldBeShownJoinForm(state),
    shouldBeShownStartGameForm: shouldBeShownStargtGameForm(state),
    shouldBeShownMakeMoveForm: shouldBeShownMakeMoveForm(state),
    shouldBeShownWaitOpponentScreen: shouldBeShownWaitOpponentScreen(state),
    shouldBeShownWaitGameFinishScreen: shouldBeShownWaitGameFinishScreen(state),
    shouldBeShownResultScreen: shouldBeShownResultScreen(state),
  }))
  return (
    <div className="App">
      <header className="App-header">
        <MetamaskConnect>
          <Loader>
            <Fragment>
              <h2>Stone Scissors Paper game</h2>
              {state.shouldBeShownJoinForm && <JoinToGameForm />}
              {state.shouldBeShownStartGameForm && <StartGameForm />}
              {state.shouldBeShownMakeMoveForm && <MakeMoveForm />}
              {state.shouldBeShownWaitOpponentScreen && <WaitOpponentScreen />}
              {state.shouldBeShownWaitGameFinishScreen && (
                <WaitGameFinishScreen />
              )}
              {state.shouldBeShownResultScreen && <ResultScreen />}
            </Fragment>
          </Loader>
        </MetamaskConnect>
      </header>
    </div>
  )
}

export default App
