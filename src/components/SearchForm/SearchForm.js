import React, { useState, useContext } from 'react';
import { TextsContext } from '../../context/TextsContext';
import { getReverseText } from '../../services/getReverseText';
import './searchform.css';

export const SearchForm = () => {

    const [inputValue, setInputValue] = useState('');
    const { textsList, setTextsList } = useContext(TextsContext);

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 0 ) {
            getReverseText(inputValue).
                    then( ({ text }) => {
                     
                      setTextsList([ text, ...textsList]);
            });
            
            setInputValue('');
        }
    }
    
    return (
        <form className="d-flex" onSubmit={ handleSubmit }>
            <input className="form-control me-2 input-custom" 
                   type="search" 
                   placeholder="Insert text" 
                   aria-label="Search" 
                   value= { inputValue }
                   onChange={ handleInputChange } />
            <button className="btn btn-primary" type="submit">Send</button>
        </form>
    )
}
