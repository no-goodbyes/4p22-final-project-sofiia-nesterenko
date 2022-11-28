import './App.css';
import {Routes, Route} from "react-router-dom"

import IndexPage from './pages/Index/Index';
import Login from './pages/Login/Login';
import Auth from './pages/Auth/Auth';
import ProductPage from './pages/Poducts/Products';
import ShoppingCart from './pages/Basket/ShoppingCart';


function App() {


  return (
    
    <div className="App">
      <Routes>
        <Route index path={'/'} element={<IndexPage/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/auth'} element={<Auth/>}/>
        <Route path={'/products'} >
          <Route path={':productId'} element={<ProductPage/>}/>
        </Route>
        <Route path={'/shoppingCart'} element={<ShoppingCart/>}/>
      </Routes>
    </div>
  );
}

export default App;
