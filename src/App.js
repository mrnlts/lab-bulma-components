import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'
import FormField from './FormField/FormField';
import CoolButton from './CoolButton/CoolButton';

const App = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="*************" />
      <CoolButton isSmall isCentered isSuccess>Sign Up</CoolButton>
    </div>
  );
};

export default App;
