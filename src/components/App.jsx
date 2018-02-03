import React from 'react';
import Header from './Header';
import MarketScheduleList from './MarketScheduleList';
import MonthlyProduceList from './MonthlyProduceList';

function App(){
  return (
    <div>
      <Header/>
      {/* inserting divs for rows and columns for now but no React Bootstrap CSS?? */}
      <div className="row">
        <div className="col-xs-1">
        </div>
        <div className="col-xs-4">
          <MarketScheduleList/>
        </div>
        <div className="col-xs-1">
          <br/><br/>
        </div>
        <div className="col-xs-4">
          <hr/>
          <MonthlyProduceList/>
        </div>
        <div className="col-xs-1">
        </div>

      </div>
    </div>
  );
}

export default App;
