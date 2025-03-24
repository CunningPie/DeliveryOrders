import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CreateOrder from './components/CreateOrder/CreateOrder'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import OrdersPage from './pages/OrdersPage/OrdersPage';
import DetailedOrderPage from './pages/DetailedOrderPage/DetailedOrderPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to="/orders" replace />} />
              <Route path="orders" element={<OrdersPage/>}/>
              <Route path="orders/create" element={<CreateOrder />}/>
              <Route path="orders/:id" element={<DetailedOrderPage />}/>
              <Route path="*" element={<PageNotFound/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
