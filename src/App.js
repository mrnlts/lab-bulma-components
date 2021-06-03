import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import FormField from './FormField/FormField';
const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </div>
  );
};

export default App;
