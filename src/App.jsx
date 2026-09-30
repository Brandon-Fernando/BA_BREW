import { Route, Routes } from 'react-router-dom'
import './App.css'
import DrinkPage from './components/DrinkPage/DrinkPage'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import MenuOption from './pages/Menu/components/MenuOption'
import Menu from './pages/Menu/Menu'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />}/>

        <Route path='/menu' element={<Menu />}/>

        {/* <Route path="/menu/:cookieId" element={<CookieDetails />}/> */}
        <Route path="/menu/:menuOption" element={<MenuOption />}/>

        <Route path="/menu/:menuOption/:drink" element={<DrinkPage />}/>
      </Route>
    </Routes>
  )
}

export default App
