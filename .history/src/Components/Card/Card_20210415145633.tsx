import React from "react";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

type CardProps = { card: PokemonTCG.Card };
export const View = ({ card }: CardProps): JSX.Element => (
  <img src={card.imageUrl} />
);