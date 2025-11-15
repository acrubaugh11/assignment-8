import "../styles/playerThrow.css";

const choices = [
  { name: "rock", img: "/images/rock.PNG", alt: "Rock" },
  { name: "paper", img: "/images/paper.PNG", alt: "Paper" },
  { name: "scissors", img: "/images/scissors.PNG", alt: "Scissors" }
];

export default function PlayerThrow({ selected, onSelect }) {
  return (
    <div className="playerthrow-container">
      <h2 className="playerthrow-title">Your Throw</h2>

      <div className="playerthrow-choices">
        {choices.map(choice => (
          <button
            key={choice.name}
            className={
              "playerthrow-btn " +
              (selected === choice.name ? "playerthrow-selected" : "")
            }
            onClick={() => onSelect(choice.name)}
            tabIndex="0"
            aria-label={`Choose ${choice.name}`}
          >
            <img
              src={choice.img}
              alt={choice.alt}
              className="playerthrow-img"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
