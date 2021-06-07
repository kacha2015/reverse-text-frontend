import React from 'react';
import { SearchForm } from '../SearchForm/SearchForm';
import './navbar.css';

export const NavBar = (setTextsList) => {
    return (
    <div>
        <nav className="navbar navbar-custom-color">
            <div className="container-fluid justify-content-center">
                <SearchForm setTextsList={setTextsList}/>
            </div>
        </nav>
    </div>
    )
}
