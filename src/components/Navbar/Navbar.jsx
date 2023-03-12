import React, { Component } from "react";
import "./Navbar.css";
import PostMessageForm from "../Post/PostMessageForm";
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }
  toggleDialog = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">
            ShareThoughts
          </a>
          <button onClick={this.toggleDialog} className="navbar-button">
            Add Post
          </button>
        </nav>
        {isOpen && <PostMessageForm />}
      </div>
    );
  }
}

export default Navbar;
