import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from './mini-react-router/index'


import User from "./pages/User.tsx";
import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/home" index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<User />} />
            <Route path="/product" element={<Product />} >
              <Route  path=":id" element={<Detail1 />} />
            </Route>
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
 
 
    </div>
  );
}

function Layout() {
  return (<>
    <h3>
      Layout
    </h3>
    <Link to={'/home'}>home</Link>{'  '}
    <Link to={'/profile'}>profile</Link>{'  '}
    <Link to={'/user'}>user</Link>{'  '}
    <Link to={'/product'}>product</Link>
    <Outlet />
  </>)
}
function Product() {
  return (<>
    <h3>
      <Link to='/product/1233123'>go detail2</Link>
      <br />
      <Outlet />
    </h3>
  </>)
}
function Detail1() {
  const params = useParams()
  const navigate = useNavigate()
  return (<>
    product detail1  : {params.id}

    <button onClick={()=>{navigate('/home')}}>go home</button>
  </>)
}
function NoMatch() {
  return (<>
   no Match
  </>)
}
export default App;
