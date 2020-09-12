import React from "react";
import "./Product.css";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";
import ProductRating from "../ProductRating/ProductRating";
import Button from "../Button";
import PropTypes from 'prop-types';

function Product({ id, title, price, rating, image }) {

  Product.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
};

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
        rating,
      },
    });
  };
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
      <img src={image} alt={title} />
      <Button label="Add to Cart" variant="basic" onClick={addToBasket} />
    </div>
  );
}

export default Product;
