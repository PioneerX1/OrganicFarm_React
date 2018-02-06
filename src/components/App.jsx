import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './Header';
import MarketScheduleList from './MarketScheduleList';
import MonthlyProduceList from './MonthlyProduceList';
import CommentControl from './CommentControl';

function App(){
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={MarketScheduleList} />
          <Route path='/monthlyproduce' component={MonthlyProduceList} />
          <Route path='/comments' component={CommentControl} />}
        </Switch>
    </div>
  );
}

export default App;
