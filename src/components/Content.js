import React from "react";
import { Redirect } from "react-router-dom";
import Slider from "./Slider";

class Content extends React.Component {
  state = {
    images: [],
  };
  componentDidMount() {
    fetch("https://wild-slider-api.herokuapp.com/images")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ images: data });
      });
  }
  render() {
    let { currentUser } = this.props;
    return currentUser ? (
      <div className="Content">
        <Slider images={this.state.images} />
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

export default Content;
