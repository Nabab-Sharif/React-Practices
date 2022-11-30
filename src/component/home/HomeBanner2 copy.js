
import React,{useState}from 'react'
import {useEffect}from 'react';
import axios from 'axios';



const HomeBanner2 = () => {

  const [todo, SetTodo] = useState([]);

  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        SetTodo(res.data)
      })
      .catch((err) => {

      })

  }, [])



  const myList = todo.map((list, i) => {
    return (
      <tr>
        <td>{list['userId']}</td>
        <td>{list['id']}</td>
        <td>{list['title']}</td>
        <td>{list['completed']}</td>
        <td><button>Delete</button></td>
        <td><button>Edit</button></td>
        <td><button>Details</button></td>
      </tr>
    )
  })



  return (
    <div>
      <table className='table'>
        {myList}
      </table>

    </div>
  );

}

export default HomeBanner2;