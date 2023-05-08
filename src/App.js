import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import User from "./pages/User.tsx";
import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<Profile/>} />
          <Route path="/user" element={<User />} />
        </Routes>
    </Router>
      
      


        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile/*" element={<Profile />} />
        </Routes> */}
      {/* <Routes>
            <Route path={'/home/:id'} element={<Home />} />
            <Route path={'/home'} element={<Home />} />
            <Route path={'/user/:userId'} element={<User />} />
            <Route path={'/profile'} element={<Profile />} />
          </Routes> */}

      {/* <Router>
          <Route path='/home' component={Home} />
          <Route path='/user' component={User} />
      </Router> */}
      {/* <Router> */}
      {/* <Route path/> */}
      {/* <User/>
          <Home/>
          <Profile/> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
