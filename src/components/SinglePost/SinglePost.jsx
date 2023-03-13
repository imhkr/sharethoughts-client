import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
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
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id); // Output: the value of id from the URL
    const { postMessageList } = this.props;
    console.log("postMessageList", postMessageList);
    this.setState({
      values: postMessageList.find((item) => item._id == id),
    });
  }

  render() {
    return (
      <div>
        SinglePost
        <h4>{this.state.values.title}</h4>
        {console.log("Values", this.state.values)}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  postMessageList: state.postMessage.list,
});
export default compose(withRouter, connect(mapStateToProps))(SinglePost);
