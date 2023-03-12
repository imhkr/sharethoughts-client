import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/postMessage";
import CardComponent from "../Card/CardComponent";
import "./Post.css";
class PostMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { fetchAllPostMessages } = this.props;
    fetchAllPostMessages();
  }
  render() {
    return (
      <>
        <div className="wrapper">
          {this.props.postMessageList.map((item, index) => {
            return (
              <CardComponent
                item={item}
                img_url={item?.profilePicUrl}
                post_date={item?.date}
                title={item.title}
                author={item.author}
                content={item.message}
                key={index}
                id={item._id}
              />
            );
          })}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  postMessageList: state.postMessage.list,
  //state.nameofReducer.state
});
const mapActionToProps = {
  fetchAllPostMessages: actions.fetchAll,
};
export default connect(mapStateToProps, mapActionToProps)(PostMessage);
