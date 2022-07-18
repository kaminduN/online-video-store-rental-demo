import React from 'react'

import { Route,Router, NavLink } from 'react-router-dom'

import { PrivateRoute } from './features/privateroute'

import { HomePage } from './pages/homepage';
import { LoginPage } from './pages/loginpage';
import { LogoutPage } from './pages/logoutpage';
import CartPage from "./pages/cartpage";
import { BookingPage } from './pages/bookingpage';
import { RegisterPage } from "./pages/registerpage";
import {history} from "./config/history";

import AdminPage from "./pages/adminpage";
     


const AppRouter = (props) => (

    <Router history={history}>
            <div>
            <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
                <span className="navbar-brand mb-0 h1">Video rental Shop</span>

                <ul className='navbar-nav'>
                    <li className="nav-item"><NavLink className="nav-link" to='/'>Home</NavLink> </li>
                    <li className="nav-item"><NavLink className="nav-link" to='/cart'>Cart</NavLink> </li>
                    {
                        localStorage.getItem('user')
                            ? <li className="nav-item"><NavLink className="nav-link" to='/booking'>Booking</NavLink> </li>
                            : null
                    }
                    
                </ul>

                <ul className="navbar-nav ml-auto">
                    {
                        localStorage.getItem('user')
                            ? <li className="nav-item"><NavLink className="nav-link" to='/logout'>Logout</NavLink></li>
                            : <li className="nav-item"><NavLink className="nav-link" to='/login'>Login</NavLink></li>
                    }
                </ul>
            </nav>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/login' component={LoginPage}/>
            <Route exact path='/logout' component={LogoutPage}/>
            <Route exact path='/cart' component={CartPage}/>
            <PrivateRoute exact path="/booking" component={BookingPage} />
            <PrivateRoute exact path="/admin" component={AdminPage} />
            <Route exact path='/register' component={RegisterPage}/>
           </div>  
        
    </Router>

)

export default AppRouter;
