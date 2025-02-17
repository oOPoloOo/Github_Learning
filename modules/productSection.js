import ProductCard from './ProductCard.js'
import { cardsData as cards } from '../data/cardsData.js';

const cardsDiv = document.querySelector('#cards > #allCardsDiv');


export const printProductCards = () => 
{       
  cards.forEach( card => 
  {      
    const cardDiv = new ProductCard(card);     
    cardsDiv.appendChild(cardDiv);
  });
}

