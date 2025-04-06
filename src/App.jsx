
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './Components/Login/Login'
import { Signup } from './Components/Signup/Signup'
import { Home } from './Components/Home/Home'
import { Layout } from './Components/Layout/Layout'
import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoute'
import { NotFound } from './Components/Not-Found/NotFound'
import { About } from './Components/AboutUs/About'
import { Account } from './Components/Account/Account'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactUs from './Components/ContactUs/ContactUs'
import ProductsPage from './Components/ProductsPage/ProductsPage'
import WishlistPage from './Components/Wishlist/Wishlist'
import CartPage from './Components/Cart/Cart'
import CheckoutPage from './Components/Checkout/Checkout';
import ProductDetails from './Components/ProductDetails/ProductDetails'
import OrderConfirmation from './Components/OrderConfirmation/OrderConfirmation'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />
          <Route path="/products" element={<ProtectedRoute><ProductsPage /></ProtectedRoute>} />
          <Route path="/products/category/:categorySlug" element={<ProtectedRoute><ProductsPage /></ProtectedRoute>} />
          <Route path="/products/category" element={<Navigate to="/products" replace />} />
          <Route path="/wishlist" element={<ProtectedRoute><WishlistPage /></ProtectedRoute>} />
          <Route path="/Cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
          <Route path="/products/:id" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
          <Route path='/order-confirmation' element={<ProtectedRoute><OrderConfirmation /></ProtectedRoute>} />


          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
