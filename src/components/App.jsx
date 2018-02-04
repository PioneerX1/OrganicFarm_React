import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './Header';
import MarketScheduleList from './MarketScheduleList';
import MonthlyProduceList from './MonthlyProduceList';

function App(){
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={MarketScheduleList} />
          <Route path='/monthlyproduce' component={MonthlyProduceList} />
        </Switch>
    </div>
  );
}

export default App;
