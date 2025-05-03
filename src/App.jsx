import React from 'react'
import './App.css'
import Landing from './Components/landingPage/Landing'
import { Routes, Route } from 'react-router-dom'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import UserPage from './Components/userPage/UserLanding'
import AdminPage from './Components/adminPage/AdminDashboard'
import Cart from './Components/Cart'
import Wishlist from './Components/WishList'
import CategoryPage from './Components/landingPage/CategoryPage'
import ProductImage from './Components/landingPage/ProductImage'

function App() {
  return (
    <div className='w-screen max-w-full'>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/category/:categorySlug" element={<CategoryPage />} />
        <Route path="/product/:categorySlug/:productId" element={<ProductImage/>}/>
        <Route path="/user/*" element={<UserPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </div>
  )
}

export default App