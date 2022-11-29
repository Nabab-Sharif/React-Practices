
import React, { useState } from 'react';

const HomeBanner = (props) => {

  const [color, setColor] = useState("Red");


  const NewBlue = () => {
    setColor("Blue");
  }


  const NewGreen = () => {
    setColor("Green");
  }



  return (
    <div>
      <h1>{color}</h1>
      <button onClick={NewBlue}>Change Blue</button>
      <button onClick={NewGreen}>Change Green</button>
    </div>
  )

}

export default HomeBanner;