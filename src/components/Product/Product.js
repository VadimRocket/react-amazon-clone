import React from 'react'
import './Product.css';
import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../context/reducer';
import ProductRating from '../ProductRating/ProductRating';

function Product({ id, title,  price, rating, image}) {

    const [{ basket }, dispatch] = useStateValue();
    // console.log('basket', basket)

    const addToBasket = () => {
        // Add item to basket
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
               
                <div className="product__rating">
                    <ProductRating rating={rating} />
                </div>
            </div>
            <img src={image}  alt='' />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
