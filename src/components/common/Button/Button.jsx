import React from "react";
import styles from "./Button.module.css";
const Button = ({ children, selectTag, selected, ...props }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  
  return (
    <button
      onClick={() => {
        selectTag(children);
      }}
      {...props}
      style={selected ? tagStyle[children] : tagStyle.default}
    >
      {children}
    </button>
  );
};

export default Button;
