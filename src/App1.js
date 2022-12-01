
import React from 'react';
import axios from 'axios';



//Get Request use here
const App = () => {

  const GetList = () => {

    let URL = "...";

    axios.get(URL)
      .then((res) => {

        if (res.status === 200) {
          let data = res.data;
        } else {
          //something went wrong

        }
      })
      .catch((err) => {
        console.log(err)
      })


  }


  return (

    <div>

    </div>
  )
}

export default App;