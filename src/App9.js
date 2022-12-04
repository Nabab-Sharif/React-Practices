
import React from 'react';
import readXlsxFile from 'read-excel-file';


const App = () => {

  const ReadExcel = () => {

    const myFile = document.getElementById("myFile");

    readXlsxFile(myFile.files[0])
      .then((data) => {
        console.log(data)
      })

  }



  return (
    <div>
      <input id='myFile' className='m-2 form-control' type="file" />
      <button onClick={ReadExcel} className='btn btn-primary'>Read Excel</button>
    </div>
  );

}

export default App;