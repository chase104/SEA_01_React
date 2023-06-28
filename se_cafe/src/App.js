import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import HomePage from './pages/homepage';
import ItemDetailsPage from './pages/pageTwo';
import { useContext, useEffect } from 'react';
import { PrimaryContext } from './contexts/PrimaryContext';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import OldOrders from './pages/old_orders';

function App() {
  const { setCategories, setItems, setCart } = useContext(PrimaryContext);



  useEffect(() => {
    // get data
    // put data in context using SET functions
    // ask server for items and categories
    axios('/categories').then((response) => {
      setCategories(response.data);
    })
  }, []);

  useEffect(() => {
    axios('/items').then((response) => {

      setItems(response.data);
    });
  }, []);
  useEffect(() => {
    axios('/cart').then((response) => {
      console.log(response.data.cart)
      if (response.data.cart) {
        setCart(response.data.cart);
      }
    });
  }, []);

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/old_orders" element={<OldOrders/>}/>
    </Routes>
     


    </div>
  );
}

export default App;
