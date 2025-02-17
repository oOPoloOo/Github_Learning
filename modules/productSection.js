import ProductCard from './ProductCard.js'
import { cardsData as cards } from '../data/cardsData.js';

const cardsDiv = document.querySelector('#cards > #allCardsDiv');
const goodsSection = document.getElementById('goods');
const buttonShowMore = document.querySelector('#moreCardsButtonDiv > button');

const printProductCards = () => 
{       
  cards.forEach( card => 
  {      
    const cardDiv = new ProductCard(card);     
    cardsDiv.appendChild(cardDiv);
  });
}

const buttonToShowMore = () => 
{
  buttonShowMore.addEventListener('click', () => {
    goodsSection.style.display = 'block';
    buttonShowMore.style.visibility = 'hidden';
  });
}

export {printProductCards, buttonToShowMore}