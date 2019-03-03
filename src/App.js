import React from 'react';
import List from './List';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col6 justify-content-center my-5">
          <List />
        </div>
      </div>
    </div>
  );
};

export default App;
