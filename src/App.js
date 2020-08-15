import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route , Link} from 'react-router-dom';

import Home from './Screens/Home';
import ProductScreen from './Screens/ProductScreen';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  //const [products, setProducts] = useState(0);

  //useEffect(() => {
    //setProducts(data.products);
  //}, [])

  
  return (
    <BrowserRouter>
      <div className="grid-container">
      <header>
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <Link to="/">Ecommerce Sheik</Link>
        </div>
        <div className="header-links">
          <a href="cart">Cart</a>
          <a href="signin">Sign-In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-btn" onClick={closeMenu}>X</button>
        <ul>
          <li><a href="index.html">Pants</a></li>
          <li><a href="index.html">Shirts</a></li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">

          <Route exact path="/" component={Home}/>
          <Route path="/product/:id" component={ProductScreen}/>
          
        </div>
      </main>
      <footer>
        All rights is reserved.
      </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
