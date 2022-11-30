
import React, { Component } from 'react'


export default class HomeBanner1 extends Component {

  constructor(props) {
    super();
    this.state = {
      color: "Blue"
    }
  }




  render() {

    if (this.state.color === "Blue") {

      return (
        <div>
          <button>Blue</button>
        </div>
      )

    } else if (this.state.color === "Green") {

      return (
        <div>
          <button>Green</button>
        </div>
      )
    }



  }

}