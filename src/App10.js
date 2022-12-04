
import React from 'react'
import ReactCodeInput from 'react-code-input';


const App = () => {


  return (
    <div>
      <ReactCodeInput onChange={(value) => { console.log(value) }} type='number' fields={6} />
    </div>
  )

}

export default App;