import React from 'react';
import { SearchForm } from '../SearchForm';
import './navbar.css';

export const NavBar = () => {
    return (
    <div>
        <nav className="navbar navbar-custom-color">
            <div className="container-fluid">
                <SearchForm />
            </div>
        </nav>
    </div>
    )
}
