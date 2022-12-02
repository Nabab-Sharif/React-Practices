
import React from 'react';
import localforage from 'localforage';
import cogoToast from 'cogo-toast';


const App = () => {

  const setData = () => {

    localforage.setItem("name", "Nabab", (err) => {
      if (err) {
        cogoToast.error(err);
        //alert(err)
      } else {
        cogoToast.success("Data Save Success");
        //alert("Data Save Success")
      }
    });


  }

  const getData = () => {

    localforage.getItem("name", (err, value) => {
      if (err) {
        cogoToast.error(err);
        //alert(err)
      } else {
        alert(value);
      }

    });


  }


  const removeData = () => {

    localforage.removeItem("name", (err) => {
      if (err) {
        cogoToast.error(err);
        //alert(err)
      } else {
        cogoToast.success("Data remove success");
        //alert("Data remove success");
      }
    });


  }


  return (
    <div>
      <button onClick={setData} className='btn btn-success m-2'>Set Data</button>
      <button onClick={getData} className='btn btn-primary m-2'>Get Data</button>
      <button onClick={removeData} className='btn btn-danger m-2'>Remove Data</button>
    </div>
  )


}
export default App;