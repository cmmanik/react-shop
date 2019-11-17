import React, { Component } from 'react';
import InputForm from '../inputitem/InputForm';
import { signInwithGoogle, auth } from '../../firebase/firebase';
import CusstomButton from '../button/CusstomButton';

class SignIn extends Component {
    state = {
        email:'',
        password:''
    }
    
    changeHandle = e => {
        const {name, value} = e.target;
        this.setState({[name]:value})
    }

    sunmitHandler = async e => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email:'',
                password:''
            })
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        const {email, password} = this.state;
        return (
            <div className="sign-in">
                <h2>I already have an Account ?</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.sunmitHandler} autoComplete="off">
                    <InputForm 
                        handleChange={this.changeHandle} 
                        type="email" name="email"
                        label="Email"
                        value={email} required />
                    <InputForm 
                        handleChange={this.changeHandle}
                        type="password" 
                        name="password"
                        label="Password"
                        value={password} required />
                    <div className="buton_div">
                        <CusstomButton type="submit">Submit</CusstomButton>
                        <CusstomButton googleSign="googleSign" onClick={signInwithGoogle} >Sign In With Google</CusstomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;