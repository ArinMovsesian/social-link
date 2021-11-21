import React from "react";
import classes from "./Card.module.css";

const Card: React.FC = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};
export default Card;
