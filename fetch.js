

window.onload = (e) => 
{  
    e.preventDefault();
    fetchFooter();  
    fetchHeader();    
};

// Footer'io ir Header'io importavimas į puslapius pages folderyje.
function fetchHeader () 
{
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

 
}

function fetchFooter() 
{
   fetch('footer.html') 
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  })
  .catch(error => console.error('Error fetching footer.html:', error));
}