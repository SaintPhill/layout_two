import React from 'react'

const Header = (props) => {
    return (
        <header>
            <div className="container">
                <div className="heading clearfix">
                    <img src="./img/logo.png" alt="Golden" className="logo"/>
                    <nav>
                        <ul className={'menu'}>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="titles">
                    <div className="titles_first">
                        Welcome To Our Studio!
                    </div>
                    <h1>
                        It’s nice to Meet you
                    </h1>
                </div>
            </div>
            <a href="#" className={'button'}>Tell me more</a>
        </header>
    )
};

export default Header