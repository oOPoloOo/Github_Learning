import { printProductCards } from "./modules/productSection.js";

window.onload = (e) => 
{  
    e.preventDefault();
    printProductCards();
};

 // Footer'io ir Header'io importavimas į puslapius pages folderyje.

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

//  Į puslapio body įdėjus :
//
// <div id="header-placeholder"></div>
// <div id="footer-placeholder"></div>
// <script src="../main.js" type="module"></script>  (svarbu, kad būtų body apačioje)
//
// bus importuojami footer'is ir header'is.

 // Footer'io ir Header'io importavimas į kitus puslapius