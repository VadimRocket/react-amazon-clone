import React from 'react'
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../context/reducer';

function Product({ id, title,  price, rating, image}) {

    const [{ basket }, dispatch] = useStateValue();
    console.log('basket', basket)
    const addToBasket = () => {
        // dispatch ADD_TO_BASKET action
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
                    {
                        Array(rating)
                        .fill()
                        .map((_,index) => (
                            <p key={index}><StarIcon fontSize="small" /></p>
                        ))
                    }
                </div>
            </div>
            <img src={image}  alt='' />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
