import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function CommentList(props){

//

  return(
    <div>
      <h2>This is where all the comments go!</h2>
      <button onClick={props.onRequestComment}>Add a Comment</button>
      <hr/>
      {props.commentList.map((comment) =>
        <Comment
          name={comment.name}
          location={comment.location}
          message={comment.message}
          key={comment.id}
          />
      )}
    </div>
  );
}

CommentList.propTypes = {
  commentList: PropTypes.array,
  onRequestComment: PropTypes.func
}

export default CommentList;
