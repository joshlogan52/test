// Function to load header and footer
function loadHeaderAndFooter() {
  fetch('header.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('header-placeholder').innerHTML = html;
    });

  fetch('footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer-placeholder').innerHTML = html;
    });
}

// Call the function to load header and footer
loadHeaderAndFooter();
