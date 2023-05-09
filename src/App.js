import React from 'react';
import { BrowserRouter as Router,Routes,Route } from './mini-react-router/index'

import User from "./pages/User.tsx";
import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/" element={<Profile/>} />
          <Route path="/user" element={<User />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
