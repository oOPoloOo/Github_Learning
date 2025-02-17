import ProductCard from './ProductCard.js'
import { cardsData as cards } from '../data/cardsData.js';
import { goodsData as allGoods } from '../data/goodsData.js';


const goodsSection = document.getElementById('goods');
const goodsDiv = document.querySelector('#goods > #allGoodsDiv');
const cardsDiv = document.querySelector('#cards > #allCardsDiv');
const buttonShowMore = document.querySelector('#moreCardsButtonDiv > button');
const buttonShowLess = document.querySelector('#lessCardsButtonDiv > button');


const printProductCards = () => 
{       
  cards.forEach( card => 
  {      
    const cardDiv = new ProductCard(card);     
    cardsDiv.appendChild(cardDiv);
  });

  const headphonesCard = document.querySelector('#headphones_id');
  const amplifierCard = document.querySelector('#allCardsDiv > .amplifier');
  const mpCard = document.querySelector('#allCardsDiv > .mp3');
  const accessoriesCard = document.querySelector('#allCardsDiv > .accessories');
 
  categoryCardsAddListeners(headphonesCard, amplifierCard , mpCard, accessoriesCard);
}
  

const buttonToShowMore = () => 
{
  buttonShowMore.addEventListener('click', () => {
    goodsSection.style.display = 'block';
    buttonShowMore.style.visibility = 'hidden';
    buttonShowLess.style.visibility = 'visible';
  });
}

const categoryCardsAddListeners = 
(headphonesCard, amplifierCard , mpCard, accessoriesCard) => 
{
  headphonesCard.addEventListener('click',categoryCardsToFilter);
  amplifierCard.addEventListener('click', categoryCardsToFilter);
  mpCard.addEventListener('click', categoryCardsToFilter);
  accessoriesCard.addEventListener('click', categoryCardsToFilter);
}

const categoryCardsToFilter = (e) => 
{  
  const choosenCategory = e.currentTarget.getAttribute('id').replace("_id","");
  
  clearGoodsCards();
  allGoods.forEach( card => 
  {      
    if(card.category == choosenCategory)
    {         
      const goodDiv = new ProductCard(card);     
      goodsDiv.appendChild(goodDiv);
    }     
  }); 
}

const clearGoodsCards = () => 
{  
  while (goodsDiv.firstChild) {
    console.log(goodsDiv.lastChild)
    goodsDiv.removeChild(goodsDiv.lastChild);
  }
}

export {printProductCards, buttonToShowMore}