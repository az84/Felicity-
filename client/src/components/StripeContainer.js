import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const PUBLIC_KEY = 'pk_test_51Jr7OKBQZv2PPJSNitiYDPzXHTWSMjGdR6jhfie4JvRIGUwV2TDFeHr2OfzMUCOtPy8Jlb5etEMUrdDEj0UpCKWx00WsDQPqEJ'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function FormContainer() {
    returrn (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />


            


        </Elements>
    )

}
