import {Component} from 'react'

import ConfigurationContext from '../../context/ConfigurationContext'

import Body from '../Body'

class ConfigurationController extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onToggleShowContent = () => {
    this.setState(prevState => ({
      showContent: !prevState.showContent,
    }))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prevState => ({
      showLeftNavbar: !prevState.showLeftNavbar,
    }))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({
      showRightNavbar: !prevState.showRightNavbar,
    }))
  }

  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          console.log(value.showContent)
          return (
            <div>
              <h1>Layout</h1>
              <div>
                <input
                  onClick={this.onToggleShowContent}
                  id="content"
                  type="checkBox"
                />
                <label htmlFor="content">Content</label>
              </div>
              <div>
                <input
                  onClick={this.onToggleShowLeftNavbar}
                  id="left"
                  type="checkBox"
                />
                <label htmlFor="left">Left Navbar</label>
              </div>
              <div>
                <input
                  onClick={this.onToggleShowRightNavbar}
                  id="right"
                  type="checkBox"
                />
                <label htmlFor="right">Right Navbar</label>
              </div>
              <Body
                showContent={showContent}
                showLeftNavbar={showLeftNavbar}
                showRightNavbar={showRightNavbar}
              />
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
