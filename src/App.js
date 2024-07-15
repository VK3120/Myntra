// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import TryOnAR from './components/TryOnAR';
import LiveLaunch from './components/LiveLaunch'; // Import the LiveLaunch component
import ThriftStore from './components/ThriftStore';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/tryon">Try On AR</Link></li>
            <li><Link to="/livelaunch">Live Launch</Link></li> {/* Add a link to Live Launch */}
            <li><Link to="/thriftstore">Thrift Store</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tryon" element={<TryOnAR />} />
          <Route path="/livelaunch" element={<LiveLaunch />} /> {/* Add route for LiveLaunch */}
          <Route path="/thriftstore" element={<ThriftStore />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
