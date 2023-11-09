import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimeRunning: false, timeInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  reset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, timeInSeconds: 0})
  }

  stop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  updateFunction = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  start = () => {
    this.timeInterval = setInterval(this.updateFunction, 1000)
    this.setState({isTimeRunning: true})
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="background">
        <div className="card">
          <h1>Stopwatch</h1>
          <div className="watch-card">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1>{time}</h1>
            <div className="button-card">
              <button
                type="button"
                className="start-button"
                onClick={this.start}
                disabled={isTimeRunning}
              >
                Start
              </button>
              <button type="button" className="stop-button" onClick={this.stop}>
                Stop
              </button>
              <button
                type="button"
                className="reset-button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
