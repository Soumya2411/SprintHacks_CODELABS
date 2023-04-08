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
              <Link className="nav-link" to="/visualizer">Visualizer</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/puzzles">Puzzles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/visualizer">
            <h2>Visualizer</h2>
          </Route>
          <Route path="/profile">
            <h2>Profile</h2>
          </Route>
          <Route path="/puzzles">
            <h2>Puzzles</h2>
          </Route>
          <Route path="/contact">
            <h2>Contact</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Dashboard;
