import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';

function Header() {

    return (
        <div className='header_main'>
            <div className='header'>
            <div className='header_name'>
                <label>Forest </label>
                <label>Search </label>
                <label className='header_one_liner'>Bring The Change</label>
            </div> 
            <div className='header_nav'>
                <Link to='/'>
                <div className='header_navoption'>
                    <span className='header_navoption_one'>DASHBOARD</span>
                </div>
                </Link>
                <Link to='/about'>
                <div className='header_navoption'>
                    <span className='header_navoption_two'>ABOUT</span>
                </div>
                </Link>
                <Link to='/subscribe'>
                <div className='header_navoption'>
                    <span className='header_navoption_three'>SUBSCRIBE</span>
                </div>
                </Link>
            </div>
            <Link to ='loginPage'>
            <div className='header_navoptionright'>
                    <span className='header_navoptionright_one'>Welcome, Sign In<PersonIcon className='header_icon'/></span>
            </div>
            </Link>
            </div>
        </div>
    )
}

export default Header
