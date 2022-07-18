import React from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'


function Cart(props){
    return( 
        <div className="card shopping-cart">

            <div className="card-header bg-dark text-light">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                Shipping cart
                <a href="/" className="btn btn-outline-info btn-sm pull-right">Continiu shopping</a>
                <div className="clearfix"></div>
            </div>

            <div className="card-body">
            {        
                    props.cart.map(item =><div className="row">

                            <div className="col-12 col-sm-12 col-md-2 text-center">
                                <img className="img-responsive" src={`/products/${item.image}`} alt="prewiew" width="120" height="100" />
                            </div>


                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                                <h4 className="product-name"><strong>{ item.name }</strong></h4>
                                <h4>
                                    <small>{ item.description }</small>
                                </h4>
                            </div>

                            <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                                <div className="col-3 col-sm-3 col-md-6 text-md-right" style={{ 'padding-top': '5px' }}>
                                    <h6>Rating : <strong>{ item.rating }<span className="text-muted">/5</span></strong></h6>
                                </div>

                                <div className="col-2 col-sm-2 col-md-2 text-right">
                                    <button type="button" className="btn btn-outline-danger btn-xs" onClick={(e) => props.removeFromCart(item)}>
                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    )   
                }
            </div>

            <div className="card-footer">
                <div className="pull-right" style={{"margin": "10px"}}>

{//this should be form
}


                    <NavLink className="nav-link btn btn-success pull-right" to='/booking'>Place Order</NavLink>
                    

                </div>
            </div>

        </div>
    )
    
}


function mapStateToProps(state){
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch){
    return {
        removeFromCart: (item) => {
            dispatch({
                type: "REMOVE",
                payload: item
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)