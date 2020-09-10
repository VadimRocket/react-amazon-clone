import React from 'react'
import  './Subtotal.css';
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'

function Subtotal() {
    
    const [ {basket}, dispatch] = useStateValue();
    // console.log(basket, dispatch)
    const getBasketTotal = (basket) => {
        let total = 0;
        basket.map(item =>(
            total += item.price
        ))
        return total;
    }
    return (
        <div className='subtotal'>

            <CurrencyFormat
                renderText={value => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items) : <strong>{`${value}`}</strong>
                            {/* Subtotal ({basket.length} items) : <strong>{`${value}`}</strong> */}
                            {/* Subtotal ( 0  items) : <strong>0</strong> */}
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                // value={0}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />

            <button>Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal
 