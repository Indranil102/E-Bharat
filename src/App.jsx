
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Nopage from './pages/nopage/Nopage';
import Mystate from './context/data/mystate';

function App() {
  return (
    <Mystate>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/nop' element={<Nopage/>} />

      </Routes>
    </Router>
    </Mystate>
  )
}

export default App
