import React, {useState, useEffect} from 'react';
import './App.css';
import data from './data.json';
import dress1 from './images/dress1.jpg'

function App() {


  const [isBoxVisible, setIsBoxVisible] = useState(false);


  const toggleBox = () => {
    setIsBoxVisible(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
  };

  const [products, setProducts] = useState(0);

  useEffect(() => {
    setProducts(data.products);
  }, [])

  console.log(products)
  
  return (
    <div className="grid-container">
      <header>
        <div className="brand">
          <button onClick={toggleBox}>
            &#9776;
          </button>
          <a href="/">Ecommerce Sheik</a>
        </div>
        <div className="header-links">
          <a href="cart">Cart</a>
          <a href="signin">Sign-In</a>
        </div>
      </header>
      <aside className={isBoxVisible ? 'sidebar open' : 'sidebar'}>
        {console.log(isBoxVisible)}
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-btn" onClick={toggleBox}>X</button>
        <ul>
          <li><a href="index.html">Pants</a></li>
          <li><a href="index.html">Shirts</a></li>
        </ul>
      </aside>
      <main>
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image" src={dress1} alt="image1"></img>
                <div className="product-name"><a href="product.html">Slim Shirt</a></div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img className="product-image" src={dress1} alt="image1"></img>
                <div className="product-name"><a href="product.html">Slim Shirt</a></div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img className="product-image" src={dress1} alt="image1"></img>
                <div className="product-name"><a href="product.html">Slim Shirt</a></div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img className="product-image" src={dress1} alt="image1"></img>
                <div className="product-name"><a href="product.html">Slim Shirt</a></div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img className="product-image" src={dress1} alt="image1"></img>
                <div className="product-name"><a href="product.html">Slim Shirt</a></div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img className="product-image" src={dress1} alt="image1"></img>
                <div className="product-name"><a href="product.html">Slim Shirt</a></div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>
            
          </ul>
        </div>

        hey
      </main>
      <footer>
        All rights is reserved.
      </footer>
    </div>
  );
}

export default App;
