import { useState } from "react";
import PlayerThrow from "./components/Playerthrow";
import ComputerThrow from "./components/ComputerThrow";
import ResultDisplay from "./components/ResultDisplay";
import ScoreBoard from "./components/ScoreBoard";
import './App.css';

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

const handlePlayerSelect = (choice) => {
  setPlayerChoice(null);

  setTimeout(() => {
    setPlayerChoice(choice);

    setComputerChoice(null);
  }, 0);
};


  const handleComputerFinish = (finalChoice) => {
    setComputerChoice(finalChoice);
  };

  return (
   <div id="main">
      <div className="app-wrapper">
        <ScoreBoard
          playerChoice={playerChoice}
          computerChoice={computerChoice}
        />

        <div className="game-container">
          <h1 className="app-title">Rock, Paper, Scissors</h1>

          <PlayerThrow 
            selected={playerChoice} 
            onSelect={handlePlayerSelect} 
          />

          <ComputerThrow
            playerChoice={playerChoice}
            onComputerFinish={handleComputerFinish}
          />

          <ResultDisplay
            playerChoice={playerChoice}
            computerChoice={computerChoice}
          />
        </div>
      </div>
    </div>

  );
}

export default App;
