import React from 'react';
import PropTypes from 'prop-types';

function MarketSchedule(props){
  return(
    <div>
      <h3>{props.day}</h3>
      <h4>{props.location} - {props.booth}</h4>
      <h4><em>{props.hours}</em></h4>
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
