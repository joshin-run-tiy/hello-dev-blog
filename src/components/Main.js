import React, { Component } from 'react'


class Main extends Component {

      constructor(props) {
        super(props)
        this.state = {
          screenIndex: 1
        }
      }

      updateScreen(newScreenIndex) {
        this.setState({
          screenIndex: newScreenIndex
        });
      }

      render() {
        let ActiveScreen

        if(this.state.screenIndex === 1) {
          ActiveScreen = <Blog />
        }

        if(this.state.screenIndex === 2) {
          ActiveScreen = <Links />
        }

        if(this.state.screenIndex === 3) {
          ActiveScreen = <About />
        }

        return(
        <div className="main-content">
          {ActiveScreen}
        </div>
    )
  }

}

module.exports = Main
