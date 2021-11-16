import React, { useState } from 'react';
import FormInput from '../form-input/from-input';
import CustomButton from '../custom-button/custom-button';
import './sign-in.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';
import { auth } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <sapn>Sign in with your email and password</sapn>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChnge={handleChange}
          name="email"
          type="email"
          lable="email"
          value={email}
          required
        />
        <FormInput
          handleChnge={handleChange}
          name="password"
          type="password"
          lable="password"
          value={password}
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
};

export default SignIn;
