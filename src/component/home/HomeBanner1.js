
import { useState } from 'react'



const HomeBanner1 = () => {

  //const [color,SetColor]=useState("blue")
  //const [color,SetColor]=useState("red")
  const [color, SetColor] = useState("green")



  if (color === "blue") {

    return (
      <div>
        <h1 style={{ color: "blue" }}>This is blue color</h1>
      </div>
    );

  } else if (color === "red") {

    return (
      <div>
        <h1 style={{ color: "red" }}>This is red color</h1>
      </div>
    );

  } else if (color === "green") {

    return (
      <div>
        <h1 style={{ color: "green" }}>This is green color</h1>
      </div>
    );

  }


}

export default HomeBanner1;