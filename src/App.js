
import React, { useState } from 'react';
import './App.css';
import { SearchContainer } from './components/SearchContainer';
import { TextsContext } from './context/TextsContext';

function App() {

  const [textsList, setTextsList] = useState([]);

  return (
    <TextsContext.Provider value = {{
      textsList,
      setTextsList
    }}>
      <div className="App">
        <SearchContainer />
      </div>
    </TextsContext.Provider>
  );
}

export default App;
