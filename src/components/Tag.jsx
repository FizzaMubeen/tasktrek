import React from "react";

import "./Tag.css";

const Tag = (props) => {
  //console.log(props);
  return <button className="tag">{props.tagName}</button>;
};

export default Tag;

//Props are Properties
