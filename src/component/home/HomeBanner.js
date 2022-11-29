
//Functional components Hooks(useEffect) use here
//npm i axios  > install

import { useEffect } from 'react';
import React, { useState } from 'react';
import axios from 'axios'


const HomeBanner = () => {

  const [todo, SetTodo] = useState([])

  useEffect(() => {

    //API call
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        //SetTodo(res.data)
        setTimeout(() => {
          SetTodo(res.data)
        }, 3000)
      })
      .catch((err) => {

      })


  });


  return (
    <div>
      {JSON.stringify(todo)}
    </div>
  );

};

export default HomeBanner;