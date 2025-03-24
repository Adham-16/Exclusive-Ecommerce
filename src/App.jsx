
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Login } from './Components/Login/Login'
import { Signup } from './Components/Signup/Signup'
import { Home } from './Components/Home/Home'
import { Layout } from './Components/Layout/Layout'
import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoute'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Route>
      </Routes>
    </>
  )
}
export default App
