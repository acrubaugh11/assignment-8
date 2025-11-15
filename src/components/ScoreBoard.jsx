import { useEffect, useState } from "react";
import "../styles/scoreBoard.css";

export default function ScoreBoard({ playerChoice, computerChoice }) {
  const [score, setScore] = useState({
    wins: 0,
    losses: 0,
    ties: 0,
  });

  useEffect(() => {
    if (!playerChoice || !computerChoice) return;

    let newScore = { ...score };

    if (playerChoice === computerChoice) {
      newScore.ties += 1;
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      newScore.wins += 1;
    } else {
      newScore.losses += 1;
    }

    setScore(newScore);
  }, [playerChoice, computerChoice]); 
  const handleReset = () => {
    setScore({ wins: 0, losses: 0, ties: 0 });
  };

  return (
    <div className="scoreboard-container">
      <h3>ScoreBoard</h3>
      <div className="scoreboard-scores">
        <p>Wins: {score.wins}</p>
        <p>Losses: {score.losses}</p>
        <p>Ties: {score.ties}</p>
      </div>
    </div>
  );
}
