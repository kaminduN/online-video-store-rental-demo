import React from 'react'

import ProductItem from "./product-item";
import { connect } from 'react-redux';

// idially this will return from a API 
import data from "../../data/products.json";
import { userConstants } from '../../constants'

function ProductListing(props){

    const products = data.products
    const mode = localStorage.getItem('user') ? 
                            userConstants.GUEST:
                            userConstants.MEMBER
    const filteredProducts = localStorage.getItem('user') ? 
                                        products:
                                        products.filter(product => product.rating <= 4)

    return(

        <div className='row'>
            {
                // filter elements that have higher raiting unless member 
                
                    filteredProducts.map( (product, index) =>
                        <ProductItem key={index} 
                                     product={product}
                                     mode={mode}
                                     addToCart={props.addToCart}
                                     removeFromCart={props.removeFromCart}
                                     cart={props.cart}/>
                )
            }
        </div>
    );
}


function mapStateToProps(state){
    return {
        cart: state.cart
    }
}


function mapDispathToProps(dispatch) {
    return{
        addToCart: (item) => {
            dispatch({
                type: 'ADD',
                payload: item
            })
        },
        removeFromCart: (item) => {
            dispatch({
                type: "REMOVE",
                payload: item
            })
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ProductListing)
