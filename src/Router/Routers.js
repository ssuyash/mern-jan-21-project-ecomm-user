import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../Containers/Home'
import Products from '../Containers/Products'
import Product from '../Containers/Product'
import Login from '../Containers/Login'
import Register from '../Containers/Register'
import Profile from '../Containers/Profile'
import Forgotpassword from '../Containers/Forgotpassword'
import Otp from '../Containers/Otp'
import Resetpassword from '../Containers/Resetpassword'
import Changepassword from '../Containers/Changepassword'
import Orders from '../Containers/Orders'
import Wishlist from '../Containers/Wishlist'
import Notifications from '../Containers/Notifications'
import Cart from '../Containers/Cart'
import Checkout from '../Containers/Checkout'
export default function Routers() {
    return (
        <Router>
            <Route path="/" component={Home} exact></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/product/:id" component={Product}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/forgot-password" component={Forgotpassword}></Route>
            <Route path="/otp" component={Otp}></Route>
            <Route path="/reset-password" component={Resetpassword}></Route>
            <Route path="/change-password" component={Changepassword}></Route>
            <Route path="/orders" component={Orders}></Route>
            <Route path="/wishlist" component={Wishlist}></Route>
            <Route path="/notifications" component={Notifications}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/checkout" component={Checkout}></Route>
        </Router>)
}
