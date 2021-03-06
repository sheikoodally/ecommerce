import React from 'react';
import './App.css';
import {BrowserRouter, Route , Link} from 'react-router-dom';

import Home from './Screens/Home';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import SignInScreen from './Screens/SignInScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './Screens/RegisterScreen';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

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
          <Link to="/cart">Cart</Link>
          {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
              <Link to="/signin">Sign In</Link>
            }
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-btn" onClick={closeMenu}>X</button>
        <ul>
          <li><Link to="/">Pants</Link></li>
          <li><Link to="/">Shirts</Link></li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/signin" component={SignInScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route exact path="/" component={Home} />
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
