import React from 'react';

class CommentControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    return(
      <div>
        <h3>This is the CommentControl component!</h3>
      </div>
    );
  }
}

export default CommentControl;
