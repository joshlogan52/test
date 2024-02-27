// Function to load header and footer
function loadHeaderAndFooter() {
  fetch('/templates/header.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('header-placeholder').innerHTML = html;
    });

  fetch('/templates/footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer-placeholder').innerHTML = html;
    });
}

// Call the function to load header and footer
loadHeaderAndFooter();
