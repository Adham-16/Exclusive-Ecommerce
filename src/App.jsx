
import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Login } from './Components/Login/Login'
import { Signup } from './Components/Signup/Signup'

function App() {
  return (
    <>
      <Header></Header>
      {/* <Signup></Signup> */}
      <Login></Login>
      <Footer></Footer>
    </>
  )
}
export default App
