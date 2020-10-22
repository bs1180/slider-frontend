import React from "react";
import "../slider.scss";
import arrow from "../pics/arrow.svg";

class Slider extends React.Component {
  state = {
    count: 0,
  };

  handleLeftClick = () => {
    if (this.state.count === 0) {
      this.setState({
        count: -100 * (this.props.images.length - 1),
      });
    } else {
      this.setState({
        count: this.state.count + 100,
      });
    }
  };

  handleRightClick = () => {
    if (this.state.count === -100 * (this.props.images.length - 1)) {
      this.setState({
        count: 0,
      });
    } else {
      this.setState({
        count: this.state.count - 100,
      });
    }
  };

  render() {
    return (
      <div className="slider">
        {this.props.images.map((element, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${this.state.count}%)` }}
            >
              <img
                src={element.image_url}
                alt="slid-img"
                className="imgStyles"
              ></img>
              ;
            </div>
          );
        })}
        <button id="leftButton" onClick={this.handleLeftClick}>
          <img src={arrow} alt="left arrow" />
        </button>
        <button id="rightButton" onClick={this.handleRightClick}>
          <img src={arrow} alt="left arrow" />
        </button>
      </div>
    );
  }
}

export default Slider;
