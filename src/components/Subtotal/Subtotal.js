import React from 'react'
import  './Subtotal.css';
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../../context/StateProvider'
import { getBasketTotal } from '../../context/reducer';
import { useHistory } from 'react-router-dom';
import Button from '../Button';

function Subtotal() {
    const [ {basket} ] = useStateValue();

    const history = useHistory();
    
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={value => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items) : <strong>{`${value}`}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
              <Button label="Proceed to Checkout" variant="basic" onClick={e => history.push('/payment')} />
        </div>
    )
}

export default Subtotal
 