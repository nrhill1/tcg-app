import React, {useState, useEffect} from 'react';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

import './App.css';

const params: PokemonTCG.Parameter = { q: 'set.id:neo1' }

function App() {
  const [cards, setCards] = useState<any>([])

  useEffect(() => 
    PokemonTCG.findCardsByQueries(params)
    .then((cards: PokemonTCG.Card[]) => {
      setCards(cards)
    })
  }, [])

  return (
    <div className="App">
      <h1>Pokemon TCG Collector</h1>
      { cards ? cards.map((card: PokemonTCG.Card)=> {
        return <div className='card' key={card.id}>
          <img src={card.images.small} alt={card.number} className="card-pic"/>
          </div>
      }) : null}
    </div>
  );
}

export default App;
