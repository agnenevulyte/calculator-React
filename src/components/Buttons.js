import React from "react";

export default function Buttons() {
  return (
    <div>
      <div className="row-fluid">
        <a id="clear" href="#" className="btn btn-danger" data-key="8">
          C
        </a>
        <a href="#" className="btn" data-key="47" id="divide">
          /
        </a>
        <a href="#" className="btn" id="multiply" data-key="42">
          *
        </a>
      </div>
      <div className="row-fluid">
        <a href="#" id="seven" className="btn" data-key="55">
          7
        </a>
        <a href="#" id="eight" className="btn" data-key="56">
          8
        </a>
        <a href="#" id="nine" className="btn" data-key="57">
          9
        </a>
        <a href="#" id="subtract" className="btn" data-key="45">
          -
        </a>
      </div>
      <div className="row-fluid">
        <a href="#" id="four" className="btn" data-key="52">
          4
        </a>
        <a href="#" id="five" className="btn" data-key="53">
          5
        </a>
        <a href="#" id="six" className="btn" data-key="54">
          6
        </a>
        <a href="#" className="btn" id="add" data-key="43">
          +
        </a>
      </div>
      <div className="row-fluid">
        <a href="#" className="btn" id="one" data-key="49">
          1
        </a>
        <a href="#" className="btn" id="two" data-key="50">
          2
        </a>
        <a href="#" className="btn" id="thee" data-key="51">
          3
        </a>
        <a href="#" className="btn" id="decimal" data-key="46">
          .
        </a>
      </div>
      <div className="row-fluid">
        <a href="#" className="btn" data-key="48" id="zero">
          0
        </a>
        <a
          id="equals"
          href="#"
          className="btn btn-primary"
          data-method="calculate"
          data-key="61"
        >
          =
        </a>
      </div>
    </div>
  );
}
