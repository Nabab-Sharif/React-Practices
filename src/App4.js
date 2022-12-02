
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const App = () => {

  let HTMLString = "<h1>hello</h1>"

  return (
    <div>
      {ReactHtmlParser(HTMLString)}
    </div>
  )
};

export default App;