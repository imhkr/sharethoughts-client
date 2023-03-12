import React, { Component } from "react";
class Button extends Component {
  render() {
    const buttonStyle = {
      backgroundColor: this.props.isprimary ? "#EF257A" : "#651FFF",
      color: "white",
      border: "none",
      // marginTop: "rem",
      cursor: "pointer",
      width: "5rem",
      height: "2.3rem",
      marginLeft: "0.5rem",
    };
    const { children, onClick, className, ...rest } = this.props;
    return (
      <button {...rest} onClick={onClick} style={buttonStyle}>
        {children}
      </button>
    );
  }
}

export default Button;
