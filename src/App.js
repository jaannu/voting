import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/Index';
import YearLogin from './components/YearLogin';
import PostSelection from './components/PostSelection';
import Vote from './components/Vote';
import ThankYou from './components/ThankYou';
import TeacherLogin from './components/TeacherLogin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/year-login/:year" component={YearLogin} />
        <Route path="/post-selection" component={PostSelection} />
        <Route path="/vote" component={Vote} />
        <Route path="/thank-you" component={ThankYou} />
        <Route path="/teacher-login" component={TeacherLogin} />
      </Switch>
    </Router>
  );
}

export default App;
