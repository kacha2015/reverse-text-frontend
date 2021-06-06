import React, { useState } from 'react';

export const SearchForm = () => {

    const [formState, setFormState ] = useState(
        {
            text: ''
        }
    );
    const { text } = formState;
    
    const handleTextSearch = ( e ) => {
        e.preventDefault();
        // { description !== '' && setTasksList([...tasksList, formState]); }
    }
    
    const handleChangeValue = ( { target } ) => {
    
            setFormState({
                ...formState,
                text: target.value
            })
     }
    
    return (
        <form className="d-flex" onSubmit={ handleTextSearch }>
            <input className="form-control me-2" type="search" placeholder="Insert text" aria-label="Search" onChange={ handleChangeValue } />
            <button className="btn btn-primary" type="submit">Send</button>
        </form>
    )
}
