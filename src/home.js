import React from 'react';

import Card from './card';
import UserContext from './context';

function Home(){
  const ctx = React.useContext(UserContext);

  return (
    <>
      <Card
        bgcolor="white"
        txtcolor="black"
        header="Welcome to Nina's Bad Bank"
        title="Security-Free, but Fun-Filled!"
        text="Please use navigation bar above"
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      />  
    </>
  );  
}

export default Home;
