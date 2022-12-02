
import React from 'react';
import exportFromJSON from 'export-from-json';


const App = () => {


  const DownloadCSV = () => {

    const data = [
      { name: "Nabab", city: "cumilla" },
      { name: "sharif", city: "Dhaka" },
      { name: "Adil", city: "Chittagong" }
    ]

    const fileName = 'download';
    const exportType = exportFromJSON.types.csv;

    exportFromJSON({ data, fileName, exportType });



  }


  return (
    <div>
      <button onClick={DownloadCSV} className='btn btn-success'>Download CSV</button>
    </div>
  )

}

export default App;