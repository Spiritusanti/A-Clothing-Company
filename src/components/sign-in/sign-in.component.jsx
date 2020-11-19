import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { ButtonsBarContainer, SignInContainer, SignInTitle } from './sign-in.styles';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.prevetDefault();

        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error)
        }      
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }
    
    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                        name='email' 
                        type='email' 
                        handleChange={this.handleChange} 
                        value={this.state.email}
                        label='Email'
                        required
                    />

                    <FormInput 
                        name='password' 
                        type='password' 
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='Password' 
                        required
                    />
                    <ButtonsBarContainer>
                        <CustomButton type='submit' value='Submit Form'>SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} type="button" isGoogleSignIn>{''} Sign in with Google{''}</CustomButton>
                    </ButtonsBarContainer>
                </form>
            
            </SignInContainer>
        );
    }
}


export default SignIn;