import React, {Component} from 'react';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import {Link} from 'react-router';
import '../App.css';

class Nav extends Component {
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='navbar-header'>
          <Link className='navbar-brand' to='/'>chunk norris world</Link>
        </div>
        <ul className='nav navbar-nav'>
          <li>
            <Link to='/'>food jokes</Link>
          </li>
          <li>
            {
             ( isLoggedIn() ) ? <Link to="/special">Celebrity Jokes</Link> :  ''
            }

          </li>
        </ul>
        <ul className='nav navbar-nav navbar-right'>
          <li>
           {
             (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
           }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
