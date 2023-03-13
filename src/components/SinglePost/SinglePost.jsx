import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/postMessage";
import "./PostWrapper.css";
const initialFieldValues = {
  title: "",
  message: "",
  date: "",
  author: "",
  profilePic: "",
};
class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: initialFieldValues,
      text: "",
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("cmdm", id);
    const { postMessageList } = this.props;
    console.log("postMessageList", postMessageList);
    this.setState({
      values: postMessageList.find((item) => item._id == id),
    });
  }
  handleInputChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const postId = this.props.match.params.id;
    console.log("postid", postId);
    const { text } = this.state;
    console.log("text is ", text);
    const { addPostComment } = this.props;
    addPostComment(postId, text);
  };

  render() {
    const { text } = this.state;
    console.log("this.props", this.props);
    const { date, title, message, author, profilePicUrl, comments } =
      this.state.values;
    return (
      <div className="PostWrapper">
        {/* <h3 className="b-time">Published {date}</h3> */}
        <h3 className="b-title">{title}</h3>
        <h3 className="info-wrapper">
          <span className="b-time">By{" " + author}</span>
          <span className="b-time"> | On {date}</span>
        </h3>
        <div className="img-holder">
          <img src={`http://localhost:4000/${profilePicUrl}`} />
        </div>
        <p className="des">{message}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={text} onChange={this.handleInputChange} />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  postMessageList: state.postMessage.list,
});
const mapActionToProps = {
  addPostComment: actions.addComment,
};
export default compose(
  withRouter,
  connect(mapStateToProps, mapActionToProps)
)(SinglePost);
