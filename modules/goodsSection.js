import ProductCard from './ProductCard.js'
import { goodsData as allGoods } from '../data/goodsData.js';

const goodsDiv = document.querySelector('#allGoodsDiv');
const goodsSection = document.getElementById('goods');
const buttonShowLess = document.querySelector('#lessCardsButtonDiv > button');
const buttonShowMore = document.querySelector('#moreCardsButtonDiv > button');

const printGoodsCards = () => 
{       
  allGoods.forEach( card => 
  {     
    if(card.category == "mp3")
    { 
      const cardDiv = new ProductCard(card);     
      goodsDiv.appendChild(cardDiv);
    }
  });
}

const buttonToShowLess = () => 
{
  buttonShowLess.addEventListener('click', () => {
    goodsSection.style.display = 'none';
    buttonShowLess.style.visibility = 'hidden';
    buttonShowMore.style.visibility = 'visible';
  });
}

export {printGoodsCards, buttonToShowLess}
