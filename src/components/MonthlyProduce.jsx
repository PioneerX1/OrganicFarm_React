import React from 'react';
import PropTypes from 'prop-types';

function MonthlyProduce(props){

  // inline css here

  return(
    <div>
      <h3>{props.month}</h3>
      <p>{props.selection}</p>
      <hr/>
    </div>
  );
}

MonthlyProduce.propTypes = {
  month: PropTypes.string.required,
  selection: PropTypes.arrayOf(PropTypes.string).required
};

export default MonthlyProduce;
