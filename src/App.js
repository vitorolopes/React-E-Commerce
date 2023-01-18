import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

//* Instead of doing this:
// import Home from "./pages/HomePage.js"
// import SingleProduct from './SingleProductPage'
// import Cart from './CartPage'
// ... etc 
//* We create a index.js file in the pages folder
//* (index.js is going to be the main entry point)
//* and, this way we avoid that our App.js gets to big
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages'

function App() {
  return (
// ! HERE 
    <AuthWrapper>

      <Router>

        <Navbar/>

        <Sidebar/>

        <Routes>

          <Route exact path="/" element={ <Home/> } />

          <Route exact path="/about" element={ <About/> } />

          <Route exact path="/cart" element={ <Cart/> } />
          
          <Route exact path="/products" element={ <Products/> } />
          
          <Route exact path="/products/:id" element={ <SingleProduct/> } />

          {/* <Route exact path="/checkout" element={ <Checkout/> } /> */}
          <Route exact path="/checkout" element={ 
                                                  <PrivateRoute>
                                                      <Checkout/>
                                                  </PrivateRoute> 
                                                } 
          />

          <Route  path="*" element={ <Error/> } />

        </Routes>

        <Footer/>

      </Router>

    </AuthWrapper>
  )
}
export default App
