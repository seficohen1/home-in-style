import React, { Component } from 'react';
import FormInput from '../form-input/from-input';
import CustomButton from '../custom-button/custom-buttom';
import './sign-in.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';
import { auth } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <sapn>Sign in with your email and password</sapn>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChnge={this.handleChange}
            name="email"
            type="email"
            lable="email"
            value={this.state.email}
            required
          />
          <FormInput
            handleChnge={this.handleChange}
            name="password"
            type="password"
            lable="password"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButton type="submmit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
              Sign In with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
