import './App.css'
import Products from './pages/Products'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Hello Everyone</h1>
      
      <BrowserRouter>
       
       <Navigation/>
          <Routes>

              <Route path='/home' element={<Home />}/>
              <Route path='/products' element={<Products />}/>

          </Routes>


      </BrowserRouter>

      
      </>
  )
}

export default App
