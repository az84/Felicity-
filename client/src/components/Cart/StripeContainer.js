import React from 'react';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = 'pk_test_51Jr7OKBQZv2PPJSNitiYDPzXHTWSMjGdR6jhfie4JvRIGUwV2TDFeHr2OfzMUCOtPy8Jlb5etEMUrdDEj0UpCKWx00WsDQPqEJ';

const stripeTestPromise = loadStripe(PUBLIC_KEY);


export default function StripeContainer() {
    return (
        <Elements stripe= {stripeTestPromise}>
            <PaymentForm />

        </Elements>
    )
}