
import React, { useState } from 'react'
import { useEffect } from 'react';
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


  const DeleteEvent = (id) => {
    const DeleteID = "Delete ID =" + id;
    //alert(DeleteID);
    //API Call Delete

  }

  const EditEvent = (id) => {
    const EditID = "Edit ID =" + id;
    //alert(EditID);
    //API Call Edit

  }

  const DetailsEvent = (id) => {
    const DetailsID = "Details ID =" + id;
    //alert(DetailsID);
    //API Call Details

  }




  const myList = todo.map((list, i) => {

    return (
      <tr>
        <td>{list['userId']}</td>
        <td>{list['id']}</td>
        <td>{list['title']}</td>
        <td>{list['completed']}</td>
        <td><button onClick={DeleteEvent(list['id'])} >Delete</button></td>
        <td><button onClick={EditEvent(list['id'])}>Edit</button></td>
        <td><button onClick={DetailsEvent(list['id'])}>Details</button></td>
      </tr>
    )
  })



  return (
    <div>
      <table>

        <thead>
          <tr>
            <th>user Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Delete</th>
            <th>Edit</th>
            <th>Details</th>

          </tr>
        </thead>


        <tbody>
          {myList}
        </tbody>

      </table>

    </div>
  );

}

export default HomeBanner2;