import React from 'react';
import '../Header/index.css'
import logo from './logo2.svg'

const Header = (props) => {

    return (
        <header className="App-header">
            <nav className="level">
                <p className="level-item has-text-centered">
                    <a className="link is-info" href="http://www.google.com">Home</a>
                </p>
                <p className="level-item has-text-centered">
                    <a className="link is-info" href="http://www.google.com">Menu</a>
                </p>
                <p className="level-item has-text-centered logo">
                    <img src={logo} alt="logo"></img>
                </p>
                <p className="level-item has-text-centered">
                    <a className="link is-info" href="http://www.google.com">Reservations</a>
                </p>
                <p className="level-item has-text-centered">
                    <a className="link is-info" href="http://www.google.com">Contact</a>
                </p>
            </nav>
        </header>
    )
}

export default Header