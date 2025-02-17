
import { printProductCards, buttonToShowMore } from "./modules/productSection.js";
import { printGoodsCards, buttonToShowLess } from "./modules/goodsSection.js";

window.onload = (e) => 
{  
    e.preventDefault();    
    printProductCards();
    printGoodsCards();
};

buttonToShowMore();
buttonToShowLess();

// // Footer'io ir Header'io importavimas į puslapius pages folderyje.


document.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      
      const navLinks = document.querySelectorAll('.nav a');
      const currentURL = window.location.href;
      navLinks.forEach(link => {
        if (link.pathname === window.location.pathname) {
          link.classList.add('active');
        }
      });
    })
    .catch(error => console.error('Error fetching header.html:', error));

  fetch('footer.html') 
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error fetching footer.html:', error));
});
