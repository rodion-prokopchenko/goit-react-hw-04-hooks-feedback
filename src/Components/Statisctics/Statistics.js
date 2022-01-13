import propTypes from "prop-types";

import shortid from "shortid";
import React, { Component } from "react";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <ul>
        <li key={shortid.generate()}>Good:{good}</li>
        <li key={shortid.generate()}>Neutral:{neutral}</li>
        <li key={shortid.generate()}>Bad:{bad}</li>
        <li key={shortid.generate()}>Total:{total}</li>
        <li key={shortid.generate()}>Positive feedback:{positivePercentage}</li>
      </ul>
    </>
  );
}
