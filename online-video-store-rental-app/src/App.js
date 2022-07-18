import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import './index.css';
// import './navigation.css'
import { history } from './config/history';
import AppRouter from './Router'
import { alertActions } from './actions'


class App extends Component {

  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
}

  render() {
    const { alert } = this.props;
    
    return (
      <div>
        <AppRouter/>
          {alert.message &&
             <div className={`alert ${alert.type}`}>{alert.message}</div>
          }

          
      </div>
    );
  }
}

// export default App;

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

// function mapStateToProps(state) {
//   const { users, authentication } = state;
//   const { user } = authentication;
//   return {
//       user,
//       users
//   };
// }
// const connectedAppPage = connect(mapStateToProps)(App);
// export { connectedAppPage as App };

const connectedApp = withRouter(connect(mapStateToProps)(App));
export { connectedApp as App };