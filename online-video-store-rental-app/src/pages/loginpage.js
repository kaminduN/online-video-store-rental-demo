import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from "../actions";

class LoginPage extends Component {

    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());
        // this.props.logoutUser()

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("called. handleSubmit :"+ this.state.username);
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
            // this.props.loginUser((username, password));
            this.setState({ password: '' });
        }else{
            console.log("not called. login");
        }
    }


    render() {

        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;


        return (
            <div >
                <div className="page-title-wrapper">
                    <h1 className="page-title">
                        <span className="base" data-ui-id="page-title-wrapper">Customer Login</span>
                    </h1>
                </div>
                <div className="login-container row">
                  
                    <div className="block-customer-login col-md-6">
                        <div className="block-title">
                            <strong id="block-customer-login-heading" role="heading" aria-level="2">Registered Customers</strong>
                        </div>
                        <div className="block-content" aria-labelledby="block-customer-login-heading">

                            <form name="form" className='form-signin' onSubmit={this.handleSubmit}>
                                
                                <p className='text-center text-muted'>If you have an account, sign in with your user name</p>

                                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                    <label className="label" htmlFor="username"><span>Username *</span></label>
                                    <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Username" required />
                                    {submitted && !username &&
                                        <div className="help-block">Username is required</div>
                                    }
                                </div>

                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                    <label className="label" htmlFor="password"><span>Password *</span></label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} placeholder="Password *" required />
                                    {submitted && !password &&
                                        <div className="help-block">Password is required</div>
                                    }
                                </div>

                                <div className='form-group'>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-primary btnSubmit">Sign in</button>
                                        {loggingIn &&
                                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                        }
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>


                    <div className="block-new-customer col-md-6">
                        <div className="block-title">
                            <strong id="block-new-customer-heading" role="heading" aria-level="2">New Customers</strong>
                        </div>
                        <div className="block-content" aria-labelledby="block-new-customer-heading">
                            <p>Creating an account has many benefits: check out faster, track orders and more.</p>
                            <div className="actions-toolbar">
                                <div className="primary">
                                    <Link to="/register" className="btn btn-primary btnSubmit"><span>Create an Account</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

// function mapDispathToProps(dispatch) {
//     return{
//         loginUser: (username, password) => {
//             dispatch(userActions.login(username, password))
//         },
//         logoutUser: (username, password) => {
//             dispatch(userActions.logout())
//         }
//     }
// }

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 
