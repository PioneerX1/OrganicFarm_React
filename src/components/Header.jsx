import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return(
    <div>
      <h1>Avery's Organic Farm</h1>
      <Link to="/">Home</Link>  |  <Link to="/monthlyproduce">Monthly Produce Schedule</Link>  |  <Link to="/comments">Customer Comments</Link>
    </div>
  );
}

export default Header;
