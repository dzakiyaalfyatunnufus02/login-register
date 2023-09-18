import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './login.css'
import { Route, BrowserRouter,Routes} from 'react-router-dom'
import Register from './Register'
import Login from './login'





const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path='/register' element={<Register />}/>
    <Route path='/' element={<Login />}/>
    {/* <Route path='/page' element={<Page/>}></Route> */}
    </Routes>
   
  </BrowserRouter>
  //  <Routes>
    {/* <BrowserRouter>
   <Route path='/page' element={<Page/>}></Route>
 </Routes>
 </BrowserRouter> */}
  
}

export default App
