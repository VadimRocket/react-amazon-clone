import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import PropTypes from 'prop-types';

function ProductRating({ rating }) {
  
  ProductRating.propTypes = {
    rating: PropTypes.number,
  };

  let halfRating = (rating - Math.floor(rating)) * 10;
  return (
    <>
      {Array(Math.floor(rating))
        .fill()
        .map((_, index) => (
          <StarIcon key={index} fontSize="small" />
        ))}
      {halfRating > 0 ? <StarHalfIcon style={{fontSize: "1.26rem"}}/> : <></>}
    </>
  );
}

export default ProductRating;
