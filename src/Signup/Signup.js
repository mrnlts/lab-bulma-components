import React from 'react';

import Navbar from '../Navbar/Navbar'
import FormField from '../FormField/FormField';
import CoolButton from '../CoolButton/CoolButton';
import Message from '../Message/Message';

const Signup = () => {
    return(
        <div className='app-container'>
            <Navbar />
            <Message isInfo title='Hello World'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </Message>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="*************" />
            <CoolButton isSmall isCentered isSuccess>Sign Up</CoolButton>
        </div>
    )
}

export default Signup;