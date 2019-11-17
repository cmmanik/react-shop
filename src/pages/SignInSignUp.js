import React from 'react';
import SignIn from '../components/signin/SignIn';
import SignUpComponent from '../components/sign-up/SignUpComponent';

const SignInSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn  />
            <SignUpComponent />
        </div>
    );
};

export default SignInSignUp;