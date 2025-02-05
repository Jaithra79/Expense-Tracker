import './App.css'
import Products from './Products'
import Home from './Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Hello Everyone</h1>
      
      <BrowserRouter>

          <Routes>

              <Route path='/home' element={<Home />}/>
              <Route path='/products' element={<Products />}/>

          </Routes>


      </BrowserRouter>

      
      </>
  )
}

export default App
