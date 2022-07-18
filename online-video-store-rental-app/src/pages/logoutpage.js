import React, { Component } from 'react'
import { connect } from 'react-redux';

import { userActions } from "../actions";


class LogoutPage extends Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());
        // this.props.logoutUser()
    }
className="main-div"

    render() {
       return <div className="row">
        <div className="col-lg-12 col-md-12 text-center">
            <h1 className="mt-5">You Have Been Logged Out</h1>
            <h4 className="lead text-center">Thank you for using our website</h4>

            <p>Please click <a href='/login'>here</a> to login back to our site</p>
        </div>
     </div>
    }
}

const connectedLoginPage = connect()(LogoutPage);
export { connectedLoginPage as LogoutPage }; 
// export default LogoutPage