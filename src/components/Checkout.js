import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

   function removeFromBasket(id) {
       dispatch({
        type: actionTypes.REMOVE_FROM_BASKET,
        id,
       })
   }
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className="checkout__banner"  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
                    alt="Checkout banner"/>

                  
                <div>
                    <h2 className="checkout__title">Your Shopping basket</h2>
                    {  basket.map( product => (
                     <CheckoutProduct
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        rating={product.rating}
                        removeProduct={removeFromBasket}
                     /> 
                     )
                    )}
                </div>  
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div> 
        </div>
    )
}

export default Checkout