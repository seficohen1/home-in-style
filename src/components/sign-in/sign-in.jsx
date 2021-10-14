import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: '',
      password: '',
    });
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
          <input
            onChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            required="true"
          />
          <label>Email</label>
          <input
            onChange={this.handleChange}
            name="password"
            type="password  "
            value={this.state.password}
            required="true"
          />
          <label>Password</label>
          <input type="submit" value="submit form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
