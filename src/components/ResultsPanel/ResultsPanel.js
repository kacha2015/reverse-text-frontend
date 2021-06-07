import React, { useContext } from 'react';
import { TextsContext } from '../../context/TextsContext';
import './resultspanel.css';

export const ResultsPanel = () => {

    const { textsList } = useContext(TextsContext);

    return (
           
        <div className="container custom-container">
          <div className="row row-cols-6">
          <h2>Results:</h2>
          </div>
        
        <div className="row row-cols-4">
        <div className="col"></div>
           <div className="col">
         {textsList.map((text, index) => (
          
          <h3 key={index}> {text} </h3>
          
        ))}
        </div>
        </div>
        </div>

    )
}
