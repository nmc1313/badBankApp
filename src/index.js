import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';

import UserContext from './context';
import AllData from './alldata.js';
import CreateAccount from './createaccount.js';
import Deposit from './deposit.js';
import Home from './home.js';
import NavBar from './navbar.js';
import Withdraw from './withdraw.js';

function Spa() {
  const ctx = React.useContext(UserContext);
  const user = ctx.users[0];
  const [balance, setBalance] = React.useState(user.balance);
  const [users, setUsers] = React.useState(ctx.users);
  
  return (
      <HashRouter>
        <h1>Welcome to Nina's Bad Bank</h1>
        <NavBar/>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/CreateAccount/" element={<CreateAccount users={users} setUsers={setUsers}/>} />
              <Route path="/deposit/" element={<Deposit balance={balance} setBalance={setBalance}/>} />
              <Route path="/withdraw/" element={<Withdraw balance={balance} setBalance={setBalance}/>} />
              <Route path="/alldata/" element={<AllData users={users}/>} />
          </Routes>
        </div>
      </HashRouter>      
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Spa />
  </React.StrictMode>
);
