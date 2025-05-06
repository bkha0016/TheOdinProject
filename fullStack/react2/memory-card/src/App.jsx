import { useEffect, useState } from "react";
import CardGrid from "./components/CardGrid";
import Scoreboard from "./components/Scoreboard";
import useFetchData from "./hooks/useFetchData";
import "./styles/App.css";

export default function App() {
  const { data: cards, loading, error } = useFetchData();
  const [shuffledCards, setShuffledCards] = useState([]);
  const [clickedIds, setClickedIds] = useState(new Set());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (cards.length) {
      setShuffledCards(shuffleArray(cards));
    }
  }, [cards]);

  function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // function shuffleAndSetCards(cardArray) {
  //   const shuffled = [...cardArray].sort(() => 0.5 - Math.random());
  //   setShuffledCards(shuffled);
  // }

  function handleCardClick(id) {
    if (clickedIds.has(id)) {
      setScore(0);
      setClickedIds(new Set()); // Reset
    } else {
      const newClickedIds = new Set(clickedIds);
      newClickedIds.add(id);
      setClickedIds(newClickedIds);

      const newScore = score + 1;
      setScore(newScore);
      setBestScore((prev) => Math.max(prev, newScore));
    }

    // Shuffle after every click
    setShuffledCards(shuffleArray(cards));
  }
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error loading Cards: {error}</p>;

  return (
    <div className="app">
      <h1>Memory Card Game</h1>
      <Scoreboard currentScore={score} bestScore={bestScore} />
      {loading && <p>Loading cards...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <CardGrid cards={shuffledCards} onCardClick={handleCardClick} />
      )}
    </div>
  );
}
