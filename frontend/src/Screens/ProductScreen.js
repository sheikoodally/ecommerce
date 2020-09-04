import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './details.css';
import { useSelector, useDispatch } from 'react-redux';
import {detailsProduct} from '../actions/productActions';

const ProductScreen = (props) => {

    const productDetail = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetail;
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);

    useEffect(() => {

        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        }
    }, [])

    const returnFunction = (count) => {
        if(count + 1 <= 10){
            return <option key={count + 1} value={count+1} >{count + 1}</option>
        }
    }



    const sizes = (size) => {
        let tempSize = [(size)];


        tempSize.map((x) => {
           return  ("hello")
        })
    }


    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
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
                               Size:  
                               <select>
                                    {sizes(product.availableSizes)}
                                </select>
                        </li>
                        <li>
                            Qty: 
                            <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                                {
                                    [...Array(product.quantity).keys()].map(x => 
                                        {return returnFunction(x)}
                                    )
                                }
                            </select>
                        </li>
                        {
                        /*<li>
                            Size: 
                            <select>
                                {product.availableSizes.map((size, index) => {
                                    return <option key={index}>{size}</option>
                                })}
                            </select>
                            </li>*/}
                        <li>
                            {product.quantity >0? 
                            
                            <button onClick={handleAddToCart} className="cart-button">Add to Cart</button> :

                            <div>Out of Stock</div>
                            
                            }
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