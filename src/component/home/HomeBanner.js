
import React, { Component } from 'react'


export default class HomeBanner extends Component {


  constructor(props) {
    super();
    this.state = {
      color: "Red"
    }
  }

  BlueColor = () => {
    this.setState({
      color: "Blue"
    })
  }

  OrangeColor=()=>{
    this.setState({
      color:"Orange"
    })
  }  

  GreenColor=()=>{
    this.setState({
      color:"Green"
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.color}</h1>
        <button onClick={this.BlueColor}>Blue</button>
        <button onClick={this.OrangeColor}>Orange</button>
        <button onClick={this.GreenColor}>Green</button>
      </div>
    )
  }


}
