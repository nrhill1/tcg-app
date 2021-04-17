import React, {useState, useEffect} from 'react';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

import './App.css';


function App() {
  const [cards, setCards] = useState<any>([])

  useEffect(() => {
    PokemonTCG.findCardByID('xy7-54')
    .then((card: PokemonTCG.Card)  => setCards([card]))
  })

  return (
    <div className="App">
      <h1>Pokemon TCG Collector</h1>
      { cards ? cards.map((card: PokemonTCG.Card)=> {
        return <div className='card'>
          <h1 className='card-name'>{card.name}</h1>
          <img src={card.Images} alt={card.number}/>
          </div>
      }) : null}
    </div>
  );
}

export default App;
