import React from 'react'
import { connect } from 'react-redux';

import ProductListing from "../features/product-listing";



function HomePage(props){


    return(
        <div>
            <h2>Home page</h2>
            
            <ProductListing/>
        </div>

    );
}


function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}
const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
