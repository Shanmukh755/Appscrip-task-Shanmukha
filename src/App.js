import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import "./App.css"
import { useState } from 'react'

const App = () => {
  const [cartDataList, setCartDataList] = useState([])
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home cartDataList={cartDataList} setCartDataList={setCartDataList} />} />
        <Route exact path='/cart' element={<Cart cartDataList={cartDataList} />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
