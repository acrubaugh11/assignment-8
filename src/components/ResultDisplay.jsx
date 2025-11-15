import { useEffect, useState } from "react";
import "../styles/resultDisplay.css";

export default function ResultDisplay({ playerChoice, computerChoice }) {
  const [resultText, setResultText] = useState("Choose your hand!");

  useEffect(() => {
    if (!playerChoice || !computerChoice) {
      setResultText("Choose your hand!");
      return;
    }

    if (playerChoice === computerChoice) {
      setResultText("It's a Tie!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      setResultText("You Win!");
    } else {
      setResultText("You Lose!");
    }
  }, [playerChoice, computerChoice]);

  return <div className="result-display">{resultText}</div>;
}
