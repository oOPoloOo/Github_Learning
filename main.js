import { printProductCards } from "./modules/productSection.js";
import { printGoodsCards } from "./modules/goodsSection.js";

window.onload = (e) => 
{  
    e.preventDefault();    
    printProductCards();
    printGoodsCards();
};

