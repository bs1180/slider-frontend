import React from "react";

class Login extends React.Component {
  state = {
    name: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("attempting to login");
    fetch("https://wild-slider-api.herokuapp.com/users")
      .then((res) => res.json())
      .then((users) => {
        let currentUser = users.find((user) => user.name === this.state.name);
        if (currentUser && currentUser.password === this.state.password) {
          this.props.updateCurrentUser(currentUser);
        } else {
          alert("incorrect username or password");
        }
      });
  };

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />

          <button type="submit" className="btn btn-primary btn-block btn-large">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
