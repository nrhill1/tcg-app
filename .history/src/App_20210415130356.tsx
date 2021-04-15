import React, {useState, useEffect} from 'react';
import './App.css';

const API_URL = "https://api.pokemontcg.io/v2/cards/xy7-54"

function App() {
  const [cards, setCards] = useState<any[]>([])

  useEffect(() => {
    fetch(API_URL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Api-Key': REACT_APP_POKEMONTCG_API_KEY
        },
    })
    .then(response => response.json())
    .then((data) => setCards(data))
    .catch(error => console.error(error));
  }, [])

  return (
    <div className="App">
      <h1>Pokemon TCG Collector</h1>
      { cards ? cards.map(card => {
        return <h1>{card.name}</h1>
      }) : null}
    </div>
  );
}

export default App;
