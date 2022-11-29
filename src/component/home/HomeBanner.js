
//Functional components Hooks(useRef)  use here

import React, { useRef } from 'react';

const HomeBanner = (props) => {

  const UserName = useRef();
  const Password = useRef();


  const SubmitForm = () => {
    const a = UserName.current.value;
    const b = Password.current.value;

    alert(a);
    alert(b);

  }


  return (
    <div>
      <input ref={UserName} placeholder='User Name' type="text" />
      <input ref={Password} placeholder='User Password' type="text" />
      <button onClick={SubmitForm}>Submit</button>
    </div>
  )

}

export default HomeBanner;