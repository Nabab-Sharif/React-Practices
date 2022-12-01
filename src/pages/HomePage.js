
import React, { Component } from 'react'
import HomeBanner from "../component/home/HomeBanner4"

export default class HomePage extends Component {

  constructor(props){
    super();
  }



  render() {
    return (
      <div>
        <HomeBanner title="Welcome to title" subtitle="To Bangladesh" />
      </div>
    )
  }
}
