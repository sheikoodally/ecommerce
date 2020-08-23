import React, {useState, useEffect} from 'react';
import data from '../data.js'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("/api/products");
            setProducts(data);
        }

        fetchData()
        return () => {

        }
    }, [])
    return (
        <div>
            <ul className="products">

        {products.map( product => 
            <li key={product.id}>
                <div className="product">
                    <Link to={'/product/' + product.id}><img className="product-image" src={product.image} alt={product.image}/></Link>
                    <div className="product-name"><Link to={'/product/' + product.id}>{product.name}</Link></div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">${product.price}</div>
                    <div className="product-rating">{product.stars} Stars ({product.reviews} Reviews)</div>
                </div>
            </li>
        )}

</ul>
        </div>
    )
}

export default Home;
