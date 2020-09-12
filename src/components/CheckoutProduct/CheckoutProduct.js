import React from "react";
import "./CheckoutProduct.css";
import ProductRating from "../ProductRating/ProductRating";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";
import Button from "../Button";
import PropTypes from 'prop-types';

const CheckoutProduct = React.forwardRef(
  ({ id, title, image, price, rating, hideButton }, ref) => {

    CheckoutProduct.propTypes = {
      id: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      rating: PropTypes.number,
      hideButton: PropTypes.func,
      ref: PropTypes.func,
  };
  const [{ basket }, dispatch] = useStateValue();

    function removeFromBasket() {
      dispatch({
        type: actionTypes.REMOVE_FROM_BASKET,
        id: id,
      });
    }

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
            <ProductRating rating={rating} />
          </div>
          {!hideButton && (
            <Button label="Delete" variant="basic" onClick={removeFromBasket} />
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
