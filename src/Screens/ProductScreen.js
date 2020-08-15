import React from 'react';
import data from '../data.js'

const ProductScreen = (props) => {
    const product = data.products.find( x => x.id === props.match.params.id);
    return (
        <div>
            {product.name} <br/> {product.price} <br/> {product.description}
        </div>
    )
}

export default ProductScreen;