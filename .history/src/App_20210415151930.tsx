import React, {useState, useEffect} from 'react';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

import './App.css';


function App() {
  const [cards, setCards] = useState<any>([])

  useEffect(() => {
    PokemonTCG.findCardByID('xy7-54')
    .then((card: PokemonTCG.Card)  => setCards(card))
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
