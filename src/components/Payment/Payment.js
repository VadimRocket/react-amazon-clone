import React from 'react'
import './Payment.css'
import { useStateValue } from '../../context/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { Link } from 'react-router-dom';


function Payment() {
    const [{basket, user},dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className='payment__box'>
                <h1>
                    Checkout (
                    <Link to='/checkout'>{basket?.length} items</Link>
                    )
                </h1>
                {/* delivery address */}
                <section className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                    </div>
                </section>
                {/* review */}
                <section className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map((product, index) => (
                           <CheckoutProduct
                            key={index}
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            rating={product.rating}
                        /> 
                        ))}
                    </div>
                </section>
                {/* payment method */}
                <section className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* stripe */}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Payment
 