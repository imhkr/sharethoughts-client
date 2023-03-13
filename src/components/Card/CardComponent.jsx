import React, { Component } from "react";
import "./card.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/postMessage";
import MyButton from "../Button/Button";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: 0,
    };
  }
  setCurrentId = (id) => {
    const { setIdOfPost } = this.props;
    setIdOfPost(id);
    const { isOpen, setValueOfIsOpen } = this.props;
    console.log("value of isOpen", isOpen);
    if (isOpen == false) {
      console.log("I am coming in true block");
      setValueOfIsOpen(true);
    } else {
      setValueOfIsOpen(false);
    }
  };
  onDelete = (id) => {
    const { deletePost, fetchAllPost } = this.props;
    window.confirm("Are you sure?");
    deletePost(id);
    fetchAllPost();
  };
  handleClick = () => {
    const { history, id } = this.props;
    history.push(`/post/${id}`);
    // console.log("working");
  };

  render() {
    const { title, content, id, post_date, author } = this.props;
    return (
      // <div className="ca">
      <div className="card">
        <div className="card-img-holder">
          <img src={`http://localhost:4000/${this.props.img_url}`} />
        </div>
        <h3 className="blog-title">{title}</h3>
        <div className="blog-td-wrapper">
          <h5 className="blog-time">
            <CalendarMonthIcon className="icon" />
            {post_date}
          </h5>

          <h5 className="blog-time">
            <PersonIcon />
            {author}
          </h5>
        </div>

        <p className="description">{content}</p>
        {/* <p>{this.props.getCurrentPostId}</p> */}
        <div className="options">
          <MyButton isprimary={"true"} onClick={() => this.setCurrentId(id)}>
            <EditIcon />
          </MyButton>
          <button className="btn" onClick={this.handleClick}>
            <RemoveRedEyeIcon />
          </button>
          <MyButton onClick={() => this.onDelete(id)}>
            <DeleteIcon />
          </MyButton>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  getCurrentPostId: state.postMessage.currentId,
  isOpen: state.postMessage.isOpen,
  //state.nameofReducer.state
});
const mapActionToProps = {
  fetchAllPost: actions.fetchAll,
  setIdOfPost: actions.setId,
  deletePost: actions.Delete,
  setValueOfIsOpen: actions.setIsOpen,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapActionToProps)
)(CardComponent);
