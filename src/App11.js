
import React from 'react';
import Cleave from 'cleave.js/react';



const App = () => {


  return (
    <div>
      <Cleave
        //options={{ creditCard: true }}

        options={{
          date: true,
          delimiter: '/',
          datePattern: ['d', 'm', 'Y']
        }}
        
      />
    </div>
  );


}

export default App;