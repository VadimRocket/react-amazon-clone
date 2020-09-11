import React from 'react'
import './Payment.css'
import { useStateValue } from '../../context/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from '../../context/reducer';
import axios from 'axios'

function Payment() {
    const [{basket, user},dispatch] = useStateValue();
    // stripe hooks
    const stripe = useStripe();
    const elements = useElements();
    
    const [error, setError] = React.useState(null);
    const [disabled, setDisabled] = React.useState(true);
    const [succeeded, setSucceeded] = React.useState(false);
    const [processing, setProcessing] = React.useState('');
    const [clientSecret, setClientSecret] = React.useState(true);
    
    const history = useHistory();

    React.useEffect(() => {
        // generate stripe secret witch allows us to charge a customer
        const getClientSecret = async () => {
            // stripe expects the total
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${ getBasketTotal(basket) }`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()

    },[basket])

    // for the form: cb fn
    async function handleSubmit(event) {
        // stripe stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
            // paymentIntent платежное намерение
        }).then(({paymentIntent}) => {
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            history.replace('/orders')
        })
    }
    // for the cardElement: cb fn
    // listen all changes in the cardElement. Display errors 
    function handleChange(event) {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : '')
    }



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
                        <p>3212 React mission</p>
                        <p>Minsk, BY</p>
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
                        <form onSubmit={handleSubmit} className="card-element">
                            <CardElement  onChange={handleChange} />
                            <div className='payment__priceBox'>
                                <CurrencyFormat
                                    renderText={value => (
                                        <>
                                          <h3>Order total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={ processing || disabled || succeeded }>
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>
                             {/* Show Errors if wrong Payment method */}
                             {error && <div>{error}</div>}
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Payment
 