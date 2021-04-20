import React, {useState, useEffect} from 'react';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

import './App.css';


function App() {
  const [cards, setCards] = useState<any>([])

  useEffect(() => {
    PokemonTCG.findSetByID('neo1')
    .then((set: PokemonTCG.Set)  => {setCards(set)})
  })

  return (
    <div className="App">
      <h1>Pokemon TCG Collector</h1>
      { cards ? cards.map((card: PokemonTCG.Card)=> {
        return <div className='card'>
          <img src={card.images.small} alt={card.number} className="card-pic"/>
          </div>
      }) : null}
    </div>
  );
}

export default App;
