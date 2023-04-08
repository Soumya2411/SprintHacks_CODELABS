import React from 'react';
import { BrowserRouter as Router, Route, Link ,Routes } from 'react-router-dom';

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

        <Routes>
          <Route path="/option1" element={<><h2>Option 1</h2></>}>
          </Route>
          <Route path="/option2" element={<><h2>Option 1</h2></>}>
          </Route>
          <Route path="/option3" element={<><h2>Option 1</h2></>}>
          </Route>
          <Route path="/option4" element={<><h2>Option 1</h2></>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Dashboard;
