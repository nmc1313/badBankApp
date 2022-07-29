import React from 'react';
import './App.css';
import UserContext from './context';
import Balance from './balance';
import { Formik, Form, Field } from 'formik';

function Withdraw(props){
  const {balance, setBalance} = props;

  function validateAmount(value) {
    let error; 
    if (!value) {
      error = 'required';
    }
    else if (value <= 0) {
      error = 'amount must be positve';
    }
    else if (value > balance) {
      error = 'cannot withdraw more than you have available';
    }
    return error;
  }

  const handleSubmit = (event) => {
    let newTotal = balance - event.amount;
    setBalance(newTotal.toFixed(2));
  };

  return (
    <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:balance}]}}>
    <h5>Withdraw</h5>

    <div className="borderStyles">
    <Balance balance={balance}/>

    <Formik 
      onSubmit={handleSubmit}
      initialValues={{
        amount: 0,
    }}>
    {({ errors, touched, isValidating }) => (
      <Form>
        <div>Amount to Withdraw: </div>
        <Field type="number" step="0.01" name="amount" validate={validateAmount} />
        {errors.amount && touched.amount && <div>{errors.amount}</div>}
        <br></br>
        <button type="submit">WITHDRAW</button>
      </Form> 
    )}     
    </Formik>

    </div>
    </UserContext.Provider>
  );
}

export default Withdraw;