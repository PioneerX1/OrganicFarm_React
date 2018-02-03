import React from 'react';
import PropTypes from 'prop-types';

function MarketSchedule(props){

  var msStyle = {
    backgroundColor: 'lightgrey',
    paddingLeft: 10
  }

  return(
    <div style={msStyle}>
      <h3>{props.day}</h3>
      <h4>{props.location} - {props.booth}</h4>
      <h4><em>{props.hours}</em></h4>
      <hr/>
    </div>
  )
}

MarketSchedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string
};

export default MarketSchedule;
