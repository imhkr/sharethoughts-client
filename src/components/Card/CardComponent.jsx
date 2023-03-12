import React, { Component } from "react";
import "./card.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/postMessage";
import MyButton from "../Button/Button";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
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
      <div className="card" onClick={this.handleClick}>
        <div className="card-img-holder">
          <img
            src={`http://localhost:4000/${this.props.img_url}`}
            // width="100%"
            // height="50%"
          />
        </div>
        <h3 className="blog-title">{title}</h3>
        <div className="blog-td-wrapper">
          <span class="blog-time">{post_date}</span>
          <span className="blog-time">{author}</span>
        </div>

        <p className="description">{content}</p>
        {/* <p>{this.props.getCurrentPostId}</p> */}
        <div className="options">
          <MyButton isprimary={true} onClick={() => this.setCurrentId(id)}>
            Edit
          </MyButton>
          <button className="btn" onClick={this.handleClick}>
            View More
          </button>
          <MyButton onClick={() => this.onDelete(id)}>Delete</MyButton>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  getCurrentPostId: state.postMessage.currentId,
  //state.nameofReducer.state
});
const mapActionToProps = {
  fetchAllPost: actions.fetchAll,
  setIdOfPost: actions.setId,
  deletePost: actions.Delete,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapActionToProps)
)(CardComponent);
