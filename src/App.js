import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import "./App.css"

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
