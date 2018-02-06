import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
  var commentStyles = {
    backgroundColor: 'salmon',
    paddingLeft: 20
  };

  return(
    <div style={commentStyles}>
      <h3><strong>{props.name}</strong> - from {props.location}</h3>
      <p><em>{props.message}</em></p>
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  message: PropTypes.string.isRequired
};

export default Comment;
