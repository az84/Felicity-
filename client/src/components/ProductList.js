import React, { useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../utils/actions';
import SingleItem from './SingleItem';
import { QUERY_PRODUCTS } from '../utils/queries';


function ProductList() {

    const [state, dispatch] = useStoreContext();
    const { currentCategory } = state;
    const { data } = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });
        }
    }, [data, dispatch]);

    function filterProducts() {
      console.log(currentCategory)
        if (!currentCategory) {
            return state.products;
        }

       return state.products.filter(product => product.category._id  === currentCategory._id);
       //return state.products.filter(product => product.category._id  === currentCategory);
    }


    return (
        <div className="my-2 ">
          {state.products.length ? (
            <div>
                {filterProducts().map(product => (
                  <div>
                    <SingleItem
                      key={product._id}
                      _id={product._id}
                      image={product.image}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      quantity={product.quantity}
                    />
                </div>
                ))}
                
            </div>
          ) : (
            <h3>You haven't added any products yet!</h3>
          )}
        </div>
      );
};

export default ProductList;