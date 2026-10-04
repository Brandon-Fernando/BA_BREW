import { Route, Routes } from 'react-router-dom'
import './App.css'
import DrinkPage from './components/DrinkPage/DrinkPage'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import MenuOption from './pages/Menu/components/MenuOption'
import Menu from './pages/Menu/Menu'
import Checkout from './pages/Checkout/Checkout'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />}/>

        <Route path='/menu' element={<Menu />}/>

        {/* <Route path="/menu/:cookieId" element={<CookieDetails />}/> */}
        <Route path="/menu/:menuOption" element={<MenuOption />}/>

        <Route path="/menu/:menuOption/:selectedDrink" element={<DrinkPage />}/>

        <Route path="/checkout" element={<Checkout />}/>
      </Route>
    </Routes>
  )
}

export default App
