import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

export default function Calculator() {
  return (
    <div id="calculator">
      <div className="container">
        <div className="row-fluid">
          <div id="calc-board">
            <Display />
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  );
}
