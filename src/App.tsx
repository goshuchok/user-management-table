import React from 'react';
import './App.css';
import UserTable from './features/users/UserTable';

function App() {
  return (
    <div className="App">  
      <header className="App-header">
        <h1>User Management</h1>
        <UserTable />
      </header>
    </div>
  );
}

export default App;
