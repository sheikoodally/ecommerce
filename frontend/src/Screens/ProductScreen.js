import React, { useEffect } from 'react';
import data from '../data.js';
import {Link} from 'react-router-dom';
import './details.css';
import { useSelector, useDispatch } from 'react-redux';
import {detailsProduct} from '../actions/productActions';

const ProductScreen = (props) => {
    //const product = data.products.find( x => x.id === props.match.params.id);

    const productDetail = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetail;
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(detailsProduct(props.match.params.id));
        
        return () => {
            //
        }
    }, [])

    const qty = 10;
    let items = [];

    for(let i = 1; i <= qty ; i++){
        if(i <= 10){
            items.push(i);
        }
    }

    return (
        <div>
            <div className="back-to-home">
            <Link to='/'> Return To Home Page</Link>
            </div>
            {loading ? <div>Loading... </div> :
                error? <div> {error} </div> : 
            (

                <div className="details">
                <div className="details-image">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            Name: {product.name}
                        </li>
                        <li>
                            Brand: {product.brand}
                        </li>
                        <li>
                            Description: {product.description}
                        </li>
                        <li>
                            Price: ${product.price}
                        </li>
                        <li>
                            {product.stars} Stars ({product.reviews} Reviews)
                        </li>
                        {/*<li>
                            Available Sizes: {product.availableSizes.map(size =>{
                               return (size + " ")
                            })}
                        </li>*/}
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Price: ${product.price}
                        </li>
                        <li>
                            Status: {product.name}
                        </li>
                        <li>
                            Qty: 
                            <select>
                                {items.map(item => {
                                    return <option key={item}>{item}</option>
                                })}
                            </select>
                        </li>
                        {/*<li>
                            Size: 
                            <select>
                                {product.availableSizes.map((size, index) => {
                                    return <option key={index}>{size}</option>
                                })}
                            </select>
                            </li>*/}
                        <li>
                            <button className="cart-button">Add to Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
            
            )

            }
            
        </div>
    )
}

export default ProductScreen;