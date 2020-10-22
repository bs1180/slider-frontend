import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Content from "./components/Content";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  updateCurrentUser = (user) => {
    this.setState({
      currentUser: user,
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route
          exact
          path="/content"
          render={() => <Content currentUser={this.state.currentUser} />}
        />
        <Switch>
          <Route
            path="/"
            render={() =>
              this.state.currentUser ? (
                <Redirect to="/content" />
              ) : (
                <Login updateCurrentUser={this.updateCurrentUser} />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
