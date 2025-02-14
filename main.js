document.addEventListener('DOMContentLoaded', () => {
    // 1) Fetch Header
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error fetching header.html:', error));
  
    // 2) Fetch Footer
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error fetching footer.html:', error));
  });