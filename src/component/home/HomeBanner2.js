
import React, { Component } from 'react'

export default class HomeBanner2 extends Component {


  MyClick = () => {
    const text = this.MyText.value;
    alert(text);
  }



  render() {

    return (
      <div>

        <input ref={(input) => { this.MyText = input }} type="text" />
        
        <button onClick={this.MyClick}>Submit</button>
      </div>
    )
  }
}
