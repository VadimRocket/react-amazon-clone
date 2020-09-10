import React from 'react'
import './CheckoutProduct.css'
import ProductRating from '../ProductRating/ProductRating';

// const CheckoutProduct  = React.forwardRef(({ id, title, image, price, rating, removeProduct }, ref ) =>  (
    const CheckoutProduct = React.forwardRef(({ id, title, image, price, rating, removeProduct }, ref) => {
        return (
        <div className="checkoutProduct" ref={ref}>
            <img className="checkoutProduct__image" src={image} alt={title} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                   <ProductRating rating={rating}/>
                </div>
                <button onClick={() => removeProduct(id)}>Delete</button>
            </div>
        </div>
   )
})


export default CheckoutProduct
