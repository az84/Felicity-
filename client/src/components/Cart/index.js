import React, { useEffect } from 'react';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { idbPromise } from '../../utils/indexedDB';
import { loadStripe } from '@stripe/stripe-js';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { useLazyQuery } from '@apollo/react-hooks';
import './Cart.css';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {

    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({
                type: ADD_MULTIPLE_TO_CART,
                products: [...cart]
            });
        };

        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session })
            })
        }
    }, [data]);

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach(item => {
            sum += item.price * item.purchaseQuantity;
        });

        return sum.toFixed(2);
    }

    function submitCheckout() {
        const productIds = [];

        state.cart.forEach((item) => {
            for (let i = 0; i < item.purchaseQuantity; i++) {
                productIds.push(item._id);
            }
        });

        getCheckout({
            variables: { products: productIds }
        });
    }



    return (
        <div className="text-center">
            <h2 className="text-center"><img src={require('../../assets/images/ShoppingCart.png')} width="50%" height="50%" alt="Shopping Cart Header" /></h2>
            <div className="d-flex justify-content-center">
                <div>
                    {state.cart.length ? (
                        <div className="col">
                            {state.cart.map(item => (
                                <CartItem key={item._id} className="row" item={item} />
                            ))}
                            <div className="py-1">
                                <h4>Total: ${calculateTotal()}</h4>
                                {
                                    Auth.loggedIn() ?
                                        <button className="btn btn-lg btn-danger " onClick={submitCheckout}>
                                            Checkout
                                </button>
                                        :
                                        <span>(log in to check out)</span>
                                }
                            </div>
                        </div>
                    ) : (<h3>Empty</h3>)}
                </div>
            </div>
        </div>
    );
};

export default Cart;