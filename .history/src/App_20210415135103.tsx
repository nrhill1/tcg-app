import React, {useState, useEffect} from 'react';
import axios from 'axios'

import './App.css';

const API_URL = "https://api.pokemontcg.io/v2/cards/xy7-54"

const config: any = {'X-Api-Key': process.env.REACT_APP_POKEMONTCG_API_KEY}

function App() {
  const [cards, setCards] = useState<any[]>([])

  async function fetchCards() {
    let response = await axios.get(API_URL, config)
    let newCards = await response.data
    setCards(newCards)
    console.log(cards)
  } 

  useEffect(() => {
    fetchCards()
  })

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
