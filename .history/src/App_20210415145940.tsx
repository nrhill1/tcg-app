import React, {useState, useEffect} from 'react';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

import './App.css';


function App() {
  const [cards, setCards] = useState<any[]>([])

  useEffect(() => {
    PokemonTCG.Card.find('xy1')
    .then(card => setCards(card))
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
