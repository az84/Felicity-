import React, { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_ORDER } from '../../utils/mutations'
import { idbPromise } from "../../utils/indexedDB";

function Success() {

    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {
        async function saveOrder() {
            const cart = await idbPromise('cart', 'get');
            const products = cart.map(item => item._id);

            if (products.length) {
                const { data } = await addOrder({ variables: { products } });
                const productData = data.addOrder.products;

                productData.forEach((item) => {
                    idbPromise('cart', 'delete', item);
                });
            }

            setTimeout(() => {
                window.location.assign('/');
            }, 3000);
        }

        saveOrder();
    }, [addOrder]);

    return (
        <div className="text-center">
            <br />
            <h1><i className="far fa-check-circle"></i></h1>
            <h2>Thank you for your purchase.</h2>
            <br />
            <h1>Your order was successfully placed!</h1>
            <br />
            <h4>I appreciate you supporting local and small businesses <br />in the surrounding San Antonio, TX area.</h4>
            <br />
            <h5>Please allow 3 to 4 business days for order processing.</h5>
            <br />
            
            <h5>You will now be redirected to the homepage.</h5>
            <p>If redirect does not occur, please proceed <a href="/">here</a>.</p>
        </div>
    )
};

export default Success;