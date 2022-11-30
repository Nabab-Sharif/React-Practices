
import React, { Component } from 'react'


export default class HomeBanner extends Component {


  constructor(props) {
    super();
  }




  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    )
  }


}
