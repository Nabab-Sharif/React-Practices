
import React, { Component } from 'react'
import axios from 'axios'



export default class HomeBanner3 extends Component {
  constructor() {
    super();
    this.state = {
      TodoList: []
    }

  }


  componentDidMount() {
    //API Call
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        this.setState({ TodoList: res.data })
      })

      .catch((err) => {
        alert(err);
      })

  }

  ActionClick = (id) => {
    alert(id);
  
  }




  render() {

    const MyList = this.state.TodoList.map((item, i) => {
      return (
        <tr>
          <td>{item['userId']}</td>
          <td>{item['id']}</td>
          <td>{item['title']}</td>
          <td><button onClick={this.ActionClick.bind(this.item['id'])}>Action</button></td>
        </tr>
      )
    })


    return (
      <div>
        <table>
          <tbody>
            {MyList}
          </tbody>
        </table>
      </div>
    )
  }


}
