
import React, { Component } from 'react'
import HomeBanner from "../component/home/HomeBanner"

export default class HomePage extends Component {

  constructor(props){
    super();
  }



  render() {
    return (
      <div>
        <HomeBanner />
      </div>
    )
  }
}
