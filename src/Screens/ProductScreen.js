import React from 'react';
import data from '../data.js';
import {Link} from 'react-router-dom';

const ProductScreen = (props) => {
    const product = data.products.find( x => x.id === props.match.params.id);
    return (
        <div>
            <Link to='/'> Return To Home Page</Link>
        </div>
    )
}

export default ProductScreen;