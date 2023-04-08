import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function Dashboard() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/option1">Option 1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/option2">Option 2</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/option3">Option 3</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/option4">Option 4</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/option1">
            <h2>Option 1</h2>
          </Route>
          <Route path="/option2">
            <h2>Option 2</h2>
          </Route>
          <Route path="/option3">
            <h2>Option 3</h2>
          </Route>
          <Route path="/option4">
            <h2>Option 4</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Dashboard;
