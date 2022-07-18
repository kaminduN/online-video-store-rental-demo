import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from "../actions";

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        // const dispatch = this.props;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
            // this.props.registerUser(user)
        }
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
            <div class="my-form">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div className="h3 card-header">Create New Customer Account</div>
                            <div class="card-body">

                                <form name="form" onSubmit={this.handleSubmit}>
                                    
                                    <legend className="legend col-form-label"><span>Personal Information</span></legend>

                                    <div className={'form-group row' + (submitted && !user.firstName ? ' has-error' : '')}>
                                        <label className="col-md-4 col-form-label text-md-right" htmlFor="firstName">First Name</label>
                                        <div class="col-md-6">
                                            <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} required />
                                            {submitted && !user.firstName &&
                                                <div className="invalid-feedback">First Name is required</div>
                                            }
                                        </div>
                                    </div>


                                    <div className={'form-group row' + (submitted && !user.lastName ? ' invalid-feedback' : '')}>
                                        <label className="col-md-4 col-form-label text-md-right" htmlFor="lastName">Last Name</label>
                                        <div class="col-md-6">
                                            <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} required />
                                            {submitted && !user.lastName &&
                                                <div className="invalid-feedback">Last Name is required</div>
                                            }
                                        </div>
                                    </div>

                                    <legend class="legend col-form-label"><span>Sign-in Information</span></legend>

                                    <div className={'form-group row' + (submitted && !user.username ? ' has-error' : '')}>
                                        <label className="col-md-4 col-form-label text-md-right" htmlFor="username">Username</label>
                                        <div class="col-md-6">
                                            <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} required />
                                            {submitted && !user.username &&
                                                <div className="invalid-feedback">Username is required</div>
                                            }
                                        </div>
                                    </div>
                                    <div className={'form-group row' + (submitted && !user.password ? ' has-error' : '')}>
                                        <label className="col-md-4 col-form-label text-md-right" htmlFor="password">Password</label>
                                        <div class="col-md-6">
                                            <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} required />
                                            {submitted && !user.password &&
                                                <div className="invalid-feedback">Password is required</div>
                                            }
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-primary btnSubmit col-md-3">Register</button>
                                            {registering &&
                                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                            }
                                            <Link to="/login" className="btn btn-link">Sign in</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

// function mapDispathToProps(dispatch) {
//     return{
//         registerUser: (user) => {
//             dispatch(userActions.register(user))
//         }
//     }
// }


const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };