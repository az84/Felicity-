import React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import './Profile.css';

const Profile = props => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const { email: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { email: userParam }
    });
    console.log(data)

    const user = data?.me || data?.user || {};

    if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
        return <Redirect to="/profile" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.email) {
        return (
            <h4>
                You need to be logged in to see this page. Either login or create an account.
            </h4>
        )
    }

    function calculateTotal() {
        let sum = 0;

        user.orders.map((order) => {
            sum += order.products.price * order.products.puchseQuantity
        })
        console.log(sum);
        return sum.toFixed(2);
        

        // user.order.products(item => {
        //     sum += item.price * item.purchaseQuantity;
        // });

        // return sum.toFixed(2);
    }

    return (
        <div>
            <h1 className="text-center">{user.firstName} {user.lastName}'s Account</h1>
            <div className="container my-1">

                {user ? (
                    <>
                        <h3 className="text-center">Order History</h3>
                        {user.orders.map((order) => (
                            <div key={order._id} className="my-2">
                               {/* <Link to="/">
                                    ← Back to Home
                                </Link> */}
                                <br />
                                <h4><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> {new Date(parseInt(order.purchaseDate)).toLocaleDateString("en-US", options)}</h4>
                                {/* <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button> */}
                                {/* <div className="d-flex flex-wrap dropdown-menu" aria-labelledby="dropdownMenuButton"> */}
                                    {/* <div className="dropdown-item"> */}
                                    <div className="d-flex flex-wrap">
                                        {order.products.map(({ _id, image, name, price }, index) => (
                                            <div key={index} className="card w-50 p-2 ordercard">
                                                <Link to={`/products/${_id}`}>
                                                    <p className="text-center lead">{name}</p>
                                                    <img
                                                        src={`/images/${image}`}
                                                        alt={name}
                                                        className="rounded mx-auto d-block profileimg"
                                                    />
                                                    
                                                </Link>
                                                <div>
                                                    <br /><p className="text-center">${price}.00</p>
                                                </div>
                                            </div>
                                            
                                        ))}
                                    {/* </div> */}
                                </div><br />
                            </div>
                        ))}
                    </>
                ) : null}
            </div>
        </div>
    )
};

export default Profile;