import React from 'react'
import { Route, BrowserRouter as Router ,Routes} from 'react-router-dom'
import Home from '../../Screen/Home'
import Product from '../../Screen/Product'
import Cart from '../../Screen/Cart'

const AppRouter = () => {
  return (
   <Router>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
   </Router>
  )
}

export default AppRouter
