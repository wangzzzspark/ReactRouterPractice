import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams,useNavigate } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* 首先这里变成了element 不再是compontne */}
          {/* index 就是默认展示页面  以及路由其实就是/ 子路由就是
默认展示不然不展示 */}
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='product' element={<Product />} >
              <Route path=':dynamic' element={<ProductDetail />} />
              <Route path='real' index element={<ProductDetailReal />} />
            </Route >
            <Route path='2'>
              <Route path='deep' element={<Deep />} />
            </Route>
          </Route>
          <Route path='*' element={<>404</>} />
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
      <Outlet />
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

      <Outlet />

    </div>
  </>)
}

function ProductDetail() {
  const params = useParams()
  const navigate = useNavigate()

  return (<>
    <h3>
      Product Detail 's Dynamic params : {params.dynamic}
    </h3>
    <button onClick={()=>{navigate('/')}}>go home</button>
  </>)
}

function ProductDetailReal() {
  const params = useParams()
  const navigate = useNavigate()

  return (<>
    <h3>
      Product Detail Real
    </h3>
    <button onClick={()=>{navigate('/')}}></button>
  </>)
}
export default App;
