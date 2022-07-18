import React from 'react';
import { userActions } from '../../actions'

export default function Logout(props){

    // reset login status
    this.props.dispatch(userActions.logout());

}