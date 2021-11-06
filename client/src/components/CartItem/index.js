import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/indexedDB';

const CartItem = ({ item }) => {

    const [, dispatch] = useStoreContext();

    const removeFromCart = item => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
        idbPromise('cart', 'delete', { ...item });
    };

    const onChange = (e) => {
        const value = e.target.value;

        if (value === '0') {
            dispatch({
                type: REMOVE_FROM_CART,
                _id: item._id
            });
            idbPromise('cart', 'delete', { ...item });
        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                purchaseQuantity: parseInt(value)
            });

            idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
        }
    };

    return (
        <div className="grid">
            <div className="containter">
                <div className="py-3 card col-lg ">
                    <div>
                        <img
                            src={`/images/${item.image}`}
                            alt=""
                        />
                        <div>{item.name}, ${item.price}</div>
                    </div>
                    <div>

                        <div className="d-flex align-items-center justify-content-center ">
                            <span>Qty: </span>
                            <input
                                type="number"
                                placeholder="1"
                                value={item.purchaseQuantity}
                                onChange={onChange}
                            />
                            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item)}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;