import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='container'>
            <header className="App-header">
                <div className="header-box">
                    <div className="header-logo">
                        <img src="/images/logo.svg" alt="logo"/>
                        <span>MyShop</span>
                    </div>

                    <div className="header-controls">
                        <button className="btn btn-outline">Вход и регистрация</button>
                        <Link to='/addProduct'>
                            <button className="btn btn-primary">Подать объявление</button>
                        </Link>
                    </div>
                    <div className="header-burger">
                        {/*<button onClick={}>*/}
                        <img src="/images/burger.svg" alt="burger"/>
                        {/*</button>*/}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;