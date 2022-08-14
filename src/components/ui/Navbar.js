import React from "react";
import "./navbar.css";
const Navabar = (props) => {
  let url = "";
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu mini">
        <a href={url} className="active item">
          Home
        </a>
        <a href={url} className="item">
          Education
        </a>
        <a href={url} className="item">
          Programming
        </a>
        <div className="right menu">{props.children}</div>
      </div>
    </div>
  );
};
export default Navabar;
