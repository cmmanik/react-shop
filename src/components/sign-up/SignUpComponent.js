import React, { Component } from 'react';
import InputForm from '../inputitem/InputForm';
import CusstomButton from '../button/CusstomButton';
import { auth, createUserProfile } from '../../firebase/firebase';

class SignUpComponent extends Component {
    state = {
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }


    changeHandle = e => {
        const {name, value} = e.target;
        this.setState({[name]:value})
    }

    sunmitHandler = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert("Password don't match.")
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            createUserProfile(user, {displayName})
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        } catch (error) {
            console.log(error)
        }
       
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2>I have no an Account ?</h2>
                <span>Create a new Account ?</span>
                <form onSubmit={this.sunmitHandler} autoComplete="off">
                    <InputForm 
                        handleChange={this.changeHandle} 
                        type="text" name="displayName"
                        label="Your Name"
                        value={displayName} required />
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
                    <InputForm 
                        handleChange={this.changeHandle}
                        type="password" 
                        name="confirmPassword"
                        label="Confirm Password"
                        value={confirmPassword} required />
                    <div className="buton_div">
                        <CusstomButton type="submit">Submit</CusstomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpComponent;