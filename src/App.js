import React from "react";
import "./App.css";
import PostMessage from "./components/Post/PostMessage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SinglePost from "./components/SinglePost/SinglePost";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        {/* <PostMessage /> */}
        <Switch>
          <Route exact path="/" component={PostMessage} />
          <Route path="/post/:id" component={SinglePost} />
        </Switch>
      </Router>
    );
  }
}

export default App;

/*
Todo:Add icon in button 
Todo:Add validation
Todo:Check Validation
Todo:Check code for edit button ,if possible store isOpen in store as variable
Todo:Make a seperate action ,reducers for comment operations.
*/
