
import React from 'react';
import axios from 'axios';

const App = () => {

  const PostData = () => {

    let URL = "....";
    let PostBody = {
      name: "nabab",
      city: "Cumilla",
      age: 26
    }


    axios.post(URL, PostBody)
      .then((res) => {
        if (res.status) {
          let data = res.data;
        } else {
          //something went wrong
        }

      })

      .catch((err) => {
        console.log(err);
      })



  }


  return (
    <div>

    </div>
  )

}


export default App;