import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function CommentForm(props){
  let _name = null;
  let _location = null;
  let _message = null;

  function handleCommentFormSubmission(event) {
    event.preventDefault();
    props.onNewCommentCreation({
      name: _name.value,
      location: _location.value,
      message: _message.value,
      id: v4()
    });
    console.log(_name.value);
    console.log(_location.value);
    console.log(_message.value);
    _name.value = '';
    _location.value = '';
    _message.value = '';
    console.log('comment form submitted!');
  }

  return(
    <div>
      <form onSubmit={handleCommentFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}
          />
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}
          />
        <input
          type='text'
          id='message'
          placeholder='Leave a comment.'
          ref={(textarea) => {_message = textarea;}}
          />
        <button type='submit'>Thanks!</button>
      </form>
    </div>
  );
}

CommentForm.propTypes = {
  onNewCommentCreation: PropTypes.func
};

export default CommentForm;
