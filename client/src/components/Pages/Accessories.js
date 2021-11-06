import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useQuery, refetch } from '@apollo/react-hooks';
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { idbPromise } from '../../utils/indexedDB';
import ProductList from '../ProductList';
import Category from '../Category';


export const Accessories = () => {
    const [state, dispatch] = useStoreContext();
    const { categories } = state;
    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    useState(() => {
         
    });

    useEffect(() => {
        if (categoryData) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories
            });
            categoryData.categories.forEach(category => {
                idbPromise('categories', 'put', category);
            });
            dispatch({
                type: UPDATE_CURRENT_CATEGORY,
                currentCategory: categoryData.categories.find(x => x.name === 'Accessories')
            })
            
        } else if (!loading) {
            
            idbPromise('categories', 'get').then(categories => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories
                });
            });
                 }
    },
     [categoryData, loading, dispatch]);
console.log("testing")
     return (
            <div>
                <img src={require('../../assets/images/Accessories.png')} width="100%" height="100%" alt="Accessories in retro style" />
                <div>
                <Link to="/">
                        ← Back to Home
                </Link>

                <ProductList />
                </div>
            </div>
        )
}