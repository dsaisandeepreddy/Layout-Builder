import {Component} from 'react'

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class Body extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = this.props
          return (
            <div className="backgorund-container">
              {showLeftNavbar && (
                <div className="first-container">
                  <h1>Left Navbar Menu</h1>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                  </ul>
                </div>
              )}

              {showContent && (
                <div className="second-container">
                  <h1>Content</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do elusmod tempor incidedunt ut labore et dolore magna
                    aliqua Ut enim ad minim veniam
                  </p>
                </div>
              )}

              {showRightNavbar && (
                <div className="first-container">
                  <h1>Right Navbar Menu</h1>
                  <div>
                    <p className="adone">Ad 1</p>
                  </div>
                  <div>
                    <p className="adone">Ad 2</p>
                  </div>
                </div>
              )}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default Body
