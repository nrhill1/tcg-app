import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards/xy7-54")
    .then(response => response.json())
    .then(data => setCards(data))
  })

  return (
    <div className="App">
      <h1>Pokemon TCG Collector</h1>
      {cards[1]}
    </div>
  );
}

export default App;
