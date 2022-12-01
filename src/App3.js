
import React from 'react';
import axios from 'axios';


const App = () => {



  const FileUp = () => {

    //post URL
    let URL = "/....";

    //Body Form Data
    let MyFormData = new FormData();
    MyFormData.append("file1", "fileObject1");
    MyFormData.append("file2", "fileObject2");
    MyFormData.append("file3", "fileObject3");

    //Header Configuration
    let HeaderConfig = {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }



    axios
      .post(URL, MyFormData, HeaderConfig)

      .then((res) => {
        if (res.status === 200) {
          const data = res.data;

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




