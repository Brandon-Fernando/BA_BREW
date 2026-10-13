import { Route, Routes } from 'react-router-dom'
import './App.css'
import DrinkPage from './components/DrinkPage/DrinkPage'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import MenuOption from './pages/Menu/components/MenuOption'
import Menu from './pages/Menu/Menu'
import Checkout from './pages/Checkout/Checkout'
import Track from './pages/Track/Track'
import AdminSignIn from './pages/Admin/AdminSignIn'
import AdminRoute from './pages/Admin/AdminRoute'
import AdminOrders from './pages/Admin/AdminOrders'
import AdminOrderInfo from './pages/Admin/components/AdminOrderInfo'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />}/>

        <Route path='/menu' element={<Menu />}/>

        {/* <Route path="/menu/:cookieId" element={<CookieDetails />}/> */}
        <Route path="/menu/:menuOption" element={<MenuOption />}/>

        <Route path="/menu/:menuOption/:selectedDrink" element={<DrinkPage />}/>

        <Route path='/track' element={<Track />}/>

        <Route path='/admin/signin' element={<AdminSignIn />}/>

        <Route element={<AdminRoute />}>
          <Route path="/admin/orders" element={<AdminOrders />} />

          <Route path="/admin/orders/:orderNum" element={<AdminOrderInfo />}/>
        </Route>

        <Route path="/checkout" element={<Checkout />}/>
      </Route>
    </Routes>
  )
}

export default App
