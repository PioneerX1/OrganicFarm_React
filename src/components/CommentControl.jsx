import React from 'react';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class CommentControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterCommentList: []
    };
    this.handleRequestComment = this.handleRequestComment.bind(this);
    this.handleNewCommentCreation = this.handleNewCommentCreation.bind(this);
  }

  handleNewCommentCreation(newComment){
    var newMasterCommentList = this.state.masterCommentList.slice();
    newMasterCommentList.push(newComment);
    this.setState({masterCommentList: newMasterCommentList});
    this.state.formVisibleOnPage = false;
  }

  handleRequestComment(){
    this.setState({formVisibleOnPage: true});
    console.log('comment form visible is ' + this.state.formVisibleOnPage);
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <CommentForm onNewCommentCreation={this.handleNewCommentCreation}/>;
    } else {
      currentlyVisibleContent = <CommentList commentList={this.state.masterCommentList} onRequestComment={this.handleRequestComment}/>;
    }

    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

// CommentControl.propTypes = {
//   onNewCommentCreation: PropTypes.func
// };

export default CommentControl;
