
import React from 'react';
import { AiFillBank, AiFillBell, AiFillAndroid } from 'react-icons/all';



const App = () => {





  return (

    <div>
      <button className='btn bg-success m-2'> <AiFillBank /> Set Data </button>
      <button className='btn bg-primary m-2'> <AiFillBell /> Get Data</button>
      <button className='btn bg-danger m-2'> <AiFillAndroid /> Remove Data</button>
    </div>
  )
}


export default App;
