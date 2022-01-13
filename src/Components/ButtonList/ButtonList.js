import { Component } from "react";
import propTypes from "prop-types";

export default class B extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <Buttons options={state} />
      </>
    );
  }
}
