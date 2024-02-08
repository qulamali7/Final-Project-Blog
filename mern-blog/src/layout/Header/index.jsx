import React from 'react'
import "./index.scss";
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <header>
                <div className='header_container'>
                    <div className='header_content'>
                        <div className='header_logo'>
                            <Link to={"/"}>WEEBEZ</Link>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to={"/"}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/"}>Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/login"}>Users</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <button className='nav_menu'>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header