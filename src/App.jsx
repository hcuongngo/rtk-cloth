import './App.css'
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/:id' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
