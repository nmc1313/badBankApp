import React from 'react';
import './App.css'

function AllData(props){
  const {users} = props;
  const userList = users.map((user, index) =>
    <tr key={index}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.password}</td>
    </tr>
  )

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Email:</th>
            <th>Password:</th>
          </tr>
        </thead>
        <tbody>
          {userList}
        </tbody>
      </table>
    </div>
  );
}

export default AllData;
