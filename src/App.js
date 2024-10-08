import {Component} from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MainScreen from './components/MainScreen'
import MobileScreen from './components/MobileScreen'
import './App.css'

import KBCContext from './context/KBCContext'

class App extends Component {
  state = {
    winnerName: '',
  }

  setWinnerName = playerName => {
    this.setState({winnerName: playerName})
  }

  render() {
    const {winnerName} = this.state
    return (
      <BrowserRouter>
        <Switch>
          <KBCContext.Provider
            value={{winnerName, setWinnerName: this.setWinnerName}}
          >
            <Route path="/" exact component={MainScreen} />
            <Route path="/:questionIndex" exact component={MobileScreen} />
          </KBCContext.Provider>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
