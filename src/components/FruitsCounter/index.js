// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  onIncrementMangoes = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  onIncrementBananas = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes} = this.state
    const {bananas} = this.state
    return (
      <div className="container">
        <div className="second-container">
          <h1>
            BoB ate <span className="span-el">{mangoes}</span> mangoes
            <span className="span-el">{bananas}</span> bananas
          </h1>

          <div className="third-container">
            <div className="third-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image-size"
              />
              <button className="button-type" onClick={this.onIncrementMangoes}>
                Eat Mango
              </button>
            </div>
            <div className="third-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image-size"
              />
              <button className="button-type" onClick={this.onIncrementBananas}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
