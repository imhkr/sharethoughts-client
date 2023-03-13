import React, { Component } from "react";
import "./Navbar.css";
import PostMessageForm from "../Post/PostMessageForm";
import MyButton from "../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/postMessage";
import PostAddIcon from "@mui/icons-material/PostAdd";
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  toggleDialog = () => {
    // this.setState((prevState) => ({
    //   isOpen: !prevState.isOpen,
    // }));
    // const { isOpen, setIsOpen } = this.state;
    // console.log("isOpen value before updation", isOpen);
    // setIsOpen(true);
    // console.log("isOpen value after updation", isOpen);
    const { isOpen, setValueOfIsOpen } = this.props;
    setValueOfIsOpen(!isOpen);
  };

  render() {
    const { isOpen } = this.props;
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">
            ShareThoughts
          </a>
          {/* <button onClick={this.toggleDialog} className="navbar-button">
            Add Post
          </button> */}
          <MyButton onClick={this.toggleDialog} isprimary={"true"}>
            <PostAddIcon />
          </MyButton>
        </nav>
        {isOpen && <PostMessageForm />}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isOpen: state.postMessage.isOpen,
  //state.nameofReducer.state
});
const mapActionToProps = {
  setValueOfIsOpen: actions.setIsOpen,
};

export default connect(mapStateToProps, mapActionToProps)(Navbar);
