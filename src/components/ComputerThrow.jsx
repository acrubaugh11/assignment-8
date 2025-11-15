import { useEffect, useState } from "react";
import "../styles/computerThrow.css";

const choices = ["rock", "paper", "scissors"];

export default function ComputerThrow({ playerChoice, onComputerFinish }) {
  const [displayChoice, setDisplayChoice] = useState("question");

  useEffect(() => {
    if (!playerChoice) {
      setDisplayChoice("question");
      return;
    }

    let index = 0;
    setDisplayChoice(choices[index]);

    const interval = setInterval(() => {
      index = (index + 1) % choices.length;
      setDisplayChoice(choices[index]);
    }, 100);

    const timeout = setTimeout(() => {
      clearInterval(interval);

      const finalChoice =
        choices[Math.floor(Math.random() * choices.length)];

      setDisplayChoice(finalChoice);

      if (onComputerFinish) onComputerFinish(finalChoice);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [playerChoice]); 

  return (
    <div className="computerthrow-container">
      <h2 className="computerthrow-title">Computer</h2>
      <div className="computerthrow-display">
        <img
          src={
            displayChoice === "question"
              ? "/images/question-mark.PNG"
              : `/images/${displayChoice}.PNG`
          }
          className="computerthrow-img"
        />
      </div>
    </div>
  );
}
