import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import HomePage from './Pages/Home/Index'
import MenuPage from './Pages/Menu/Index'

const App = () => {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
