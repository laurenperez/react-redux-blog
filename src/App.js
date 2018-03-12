import React, { Component } from 'react';
import Form from './Form';
import List from './List';


// because we are using redux many of our components
// can be written as functional or "stateless" components
const App = () => (
  <div>
    <div>
      <h2>Add a new Article: </h2>
      <Form />
    </div>
      <div>
        <h2>Articles: </h2>
        <List />
      </div>
  </div>
)

export default App;
