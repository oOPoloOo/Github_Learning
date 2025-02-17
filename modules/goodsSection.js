import ProductCard from './ProductCard.js'
import { goodsData as allGoods } from '../data/goodsData.js';

const goodsDiv = document.querySelector('#goods > #allGoodsDiv');


export const printGoodsCards = () => 
{       
  allGoods.forEach( card => 
  {      
    const cardDiv = new ProductCard(card);     
    goodsDiv.appendChild(cardDiv);
  });
}

