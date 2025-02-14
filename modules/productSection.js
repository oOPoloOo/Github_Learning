import ProductCard from './ProductCard.js'
import { cardsData as cards } from '../data/cardsData.js';

const usersDiv = document.querySelector('#cards > div:nth-child(1)');


window.onload = (e) => {
    console.log("page is fully loaded");
    e.preventDefault();
    printProductCards();
    console.log("page is fully loaded 2");
    
};

const printProductCards = () => 
{   
    cards.forEach( card => 
    {      
      const cardDiv = new ProductCard(card);     
      usersDiv.appendChild(cardDiv);
    });
}

