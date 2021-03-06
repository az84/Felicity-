import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from '../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../utils/actions';
import { idbPromise } from "../utils/indexedDB";
import './SingleItem.css';

function ProductItem(item) {
  const {
    image,
    name,
    _id,
    price,
    // description,
    quantity
  } = item;

  const [state, dispatch] = useStoreContext();

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);

    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="card mb-4 shadow-sm" width="400px">
      <Link to={`/products/${_id}`}>
        <img
          className="card-img-top" display="block" width="400px" height="100%" 
          alt={name}
          src={`/images/${image}`}
        />
        <p className="text-center">{name}</p>
      </Link>
      <div>
        <div>{quantity} In stock</div>
        <span>${price}</span>
      </div>

      <button onClick={addToCart}>Add to cart</button>

      <div>Or A Monthly Order</div>
          <button onClick={addToCart}>Add to cart with subscription</button>
          <span>${price} per month</span>

    </div>
   
    
  );
}

export default ProductItem;