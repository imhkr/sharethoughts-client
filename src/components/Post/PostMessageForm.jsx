import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/postMessage";
import "./AddPost.css";
import JoditEditor from "jodit-react";
import MyButton from "../Button/Button";
const initialFieldValues = {
  title: "",
  message: "",
  date: "",
  author: "",
  profilePic: "",
};
class PostMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: initialFieldValues,
      content: "",
    };
  }

  componentDidUpdate(prevProps) {
    const { postMessageId, postMessageList } = this.props;
    if (postMessageId != prevProps.postMessageId) {
      console.log("I am called");
      this.setState({
        values: postMessageList.find((item) => item._id == postMessageId),
      });
    }
  }
  handleContentChange = (value) => {
    this.setState({ content: value });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const postDate = `${year}-${month}-${day}`;
    const { postMessageId, createPostMessage, updatePostMessage } = this.props;
    const { values } = this.state;
    const updatedValues = {
      ...values,
      date: postDate,
      message: this.state.content,
    };
    const formData = new FormData();
    formData.append("title", this.state.values.title);
    formData.append("message", this.state.content);
    formData.append("date", postDate);
    formData.append("author", this.state.values.author);
    formData.append("image", this.state.values.profilePic);
    console.log("updatedValues", formData);
    console.log("props content", this.state.content);
    const onSuccess = () => {
      window.alert("Submitted Successfully");
    };
    e.preventDefault();
    if (postMessageId == 0) {
      console.log("updatedValues ", formData);
      createPostMessage(formData, onSuccess);
    } else {
      updatePostMessage(postMessageId, formData, onSuccess);
    }
  };
  handleFormReset = () => {
    this.setState({
      values: initialFieldValues,
      content: "",
    });
  };
  imageUpload = (e) => {
    console.log(e.target.files);
    this.setState({
      values: {
        ...this.state.values,
        profilePic: e.target.files[0],
      },
    });
  };
  render() {
    const { values } = this.state;
    return (
      <div className="inputWrapper">
        <h2 className="input-heading">What's going in your mind?</h2>
        <div className="joditwrapper">
          <form onSubmit={this.handleSubmit}>
            <h4>Post Title</h4>
            <input
              className="input"
              type="text"
              name="title"
              value={values.title}
              onChange={this.handleInputChange}
            />

            <h4>Post Content</h4>
            {/* <input
            type="text"
            name="message"
            value={values.message}
            onChange={this.handleInputChange}
          /> */}
            <JoditEditor
              value={this.state.content}
              onChange={this.handleContentChange}
            />

            <h4>Post Author</h4>
            <input
              className="input"
              type="text"
              name="author"
              value={values.author}
              onChange={this.handleInputChange}
            />
            <h4>Upload Image</h4>
            <input type="file" name="profilepic" onClick={this.imageUpload} />
          </form>
          <div className="button-wrapper">
            <MyButton isprimary={true} onClick={this.handleSubmit}>
              Submit
            </MyButton>
            <MyButton onClick={this.handleFormReset}>Reset</MyButton>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postMessageList: state.postMessage.list,
  postMessageId: state.postMessage.currentId,
});
const mapActionToProps = {
  createPostMessage: actions.create,
  updatePostMessage: actions.update,
};
export default connect(mapStateToProps, mapActionToProps)(PostMessageForm);
