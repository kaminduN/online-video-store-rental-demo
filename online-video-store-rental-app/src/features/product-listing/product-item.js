import React from 'react';
import Rating from 'react-rating'

import { userConstants } from '../../constants'

export default function ProductItem(props){

    const thisItemInCart = props.cart.filter( item => item.id === props.product.id)[0]

    return(
        <div className="card col-lg-3 col-sm-6 col-md-4 mt-3 h-25" style={{padding:'15px'}}>

            <img className='card-img-top' 
               
                  title={ props.product.name }
                  alt={ props.product.name }
                  src={`/products/${props.product.image}`}
                  />
            <div className="card-body">
                <h3 className="card-title text-truncate" data-toggle="tooltip" data-placement="top" title={ props.product.name }>{ props.product.name }</h3>

                <div>
                    <p>Availability </p>
                    <p>{props.product.avilability}</p>
                </div>
                {
                    props.mode === userConstants.GUEST ?
                        <div>
                            <p>Rating </p>
                            <Rating initialRating={props.product.rating} />
                        </div>
                    :    <div/>
                }
            </div>

            <div className="card-footer text-muted">


                {
                    thisItemInCart
                    ? <button type="button" className="btn btn-primary"
                        onClick={ () => props.removeFromCart(props.product) }>
                        <i className="fa fa-shopping-cart"></i>
                              Remove from Cart
                      </button>
                    : <button type="button" className="btn btn-primary"        
                               onClick={ () => props.addToCart(props.product) }>               
                            <i className="fa fa-shopping-cart"></i>
                                 Add to Cart
                        </button>
                }
                </div>
        </div>
    );
}