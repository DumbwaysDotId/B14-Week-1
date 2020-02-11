import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

//Import page yang ingin di navigasikan.
import Content from './components/content';
import Increment from './components/increment';
import List from './components/list';

class App extends Component {
  render(){
    return(
      <Router>
        <div className="App-link">
          <nav>
            <ul>
              <li>
                <Link to="/">Content</Link>
              </li>
              <li>
                <Link to="/Increment">Increment</Link>
              </li>
              <li>
                <Link to="/List">List</Link>
              </li>
            </ul>
          </nav>
        

      <Switch>

        <Route path="/Increment">
          <Increment />
        </Route>

        <Route path="/List">
          <List />
        </Route>

        <Route path="/">
          <Content />
        </Route>
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;