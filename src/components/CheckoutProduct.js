import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './CheckoutProduct.css'


const CheckoutProduct  = React.forwardRef(({ id, title, image, price, rating, removeProduct }, ref) =>  (
        <div className="checkoutProduct" ref={ref}>
            <img className="checkoutProduct__image" src={image} alt={title} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_, id) => ( <p  key={id}><StarIcon fontSize="small" /></p>)) 
                    }
                </div>
                <button onClick={() => removeProduct(id)}>Delete</button>
            </div>
        </div>
 ));


export default CheckoutProduct
