import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState<any[]>([])

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards/xy7-54")
    .then(response => response.json())
    .then(data => setCards(data))
  })

  return (
    <div className="App">
      <h1>Pokemon TCG Collector</h1>
      {cards.map(card => {
        return <h1>{card.name}</h1>
      })}
    </div>
  );
}

export default App;
