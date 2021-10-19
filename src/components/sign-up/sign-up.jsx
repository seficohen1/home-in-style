import React, { Component } from 'react';
import './sign-up.scss';
import FormInput from '../form-input/from-input';
import CustomButton from '../custom-button/custom-buttom';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Please make sure your password match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            lable="Display name"
            requierd="true"
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            lable="email"
            requierd="true"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            lable="Password"
            requierd="true"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            lable="Confirm Password"
            requierd="true"
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
