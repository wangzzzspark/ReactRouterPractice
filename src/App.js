import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams,useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from './myRouter/index';



function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='Product' element={<Product />} />
            <Route path='deep' element={<Deep />} />
            <Route path='home' element={<Home />} />
          </Route>

        </Routes>
      </Router>


    </div>
  );
}


function Layout() {
  return (
    <>
      <Link to=''>go home</Link> {'  '}
      <Link to='product'>go product</Link>
      {/* <Outlet /> */}
    </>
  )
}

function Deep() {
  return (<>
    <h3>
      deep page
    </h3>
  </>)
}

function Home() {
  return (<>
    <h3>
      Home page
    </h3>
  </>)
}

function Product() {
  return (<>
    <div>
      Product page
      <div>
        <Link to={`/product/213123`}>detail</Link>
      </div>

      {/* <Outlet /> */}

    </div>
  </>)
}

function ProductDetail() {
  // const params = useParams()
  // const navigate = useNavigate()

  return (<>
    <h3>
      {/* Product Detail 's Dynamic params : {params.dynamic} */}
    </h3>
    {/* <button onClick={()=>{navigate('/')}}>go home</button> */}
  </>)
}

function ProductDetailReal() {
  // const params = useParams()
  // const navigate = useNavigate()

  return (<>
    <h3>
      Product Detail Real
    </h3>
    {/* <button onClick={()=>{navigate('/')}}></button> */}
  </>)
}
export default App;
