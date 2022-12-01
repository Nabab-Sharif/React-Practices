
import React from 'react';
import cogoToast from 'cogo-toast';



const App = () => {

  const ErrorToast=()=>{
    cogoToast.error("Your Toast Content");
  }

  const SuccessToast=()=>{
    cogoToast.success("Your Toast Content")
  }


  return (
    <div>
      <button onClick={ErrorToast}>Error</button>
      <button onClick={SuccessToast}>Success</button>
    </div>
  )
}


export default App;