import React, { useContext } from 'react';
import { TextsContext } from '../../context/TextsContext';
import './resultspanel.css';

export const ResultsPanel = () => {

    const { textsList } = useContext(TextsContext);

    return (
           
        <div className="container custom-container" >
          <div className="row">
              <div className="col">
                <div className="d-flex flex-row"><h2>Results:</h2></div>
              </div>
          <div className="row justify-content-center">
          <div className="col-md-6">
              {textsList.map((text, index) => (
                <div className="box-custom" key={index}>
                  <span className="border border-dark"><label>{text}</label></span>
                </div>
                
                ))}
        
          </div>
          </div>
  
        </div>
        

        </div>

    )
}
