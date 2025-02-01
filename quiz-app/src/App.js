import Quiz from './components/quiz';
import './App.css';
import React, { useState} from 'react';

function App() {

  const [showMain, setShowMain] = useState(false);

    const handleClick = () => {
        setShowMain(true);
    };

  return (
    <div className="App">
      <h1 className='title'>Quiz App</h1>
      {!showMain && <button className='start' onClick={handleClick}>Start Quiz</button>}
    
      {showMain && <Quiz />}
      
    </div>)
  }

export default App;