import { printProductCards, buttonToShowMore } from "./modules/productSection.js";
import { printGoodsCards, buttonToShowLess } from "./modules/goodsSection.js";

window.onload = (e) => 
{  
    e.preventDefault();    
    printProductCards();
    printGoodsCards();
};

buttonToShowMore();
buttonToShowLess()
