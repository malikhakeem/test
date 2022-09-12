import React from "react";
import SwipeableViews from "react-swipeable-views";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";

const Swipe = () => (
  <SwipeableViews>
    <div style={Object.assign({})}>{FirstComponent}</div>
    <div style={Object.assign({})}>{SecondComponent}</div>
    <div style={Object.assign({})}>{ThirdComponent}</div>
  </SwipeableViews>
);

export default Swipe;
