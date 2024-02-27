document.addEventListener("DOMContentLoaded", function() {
  // Function to load content of a specific page into the template
  function loadPageContent(pageName) {
    fetch(pageName + '.html')
      .then(response => response.text())
      .then(html => {
        // Replace placeholders with page content
        document.title = html.match(/<title>([^<]*)/i)[1];
        document.querySelector('.main').innerHTML = html.match(/<div class="main">([\s\S]*)<\/div>/i)[1];
        document.querySelector('.sidenav').innerHTML = html.match(/<nav class="sidenav">([\s\S]*)<\/nav>/i)[1];
      });
  }

  // Load content of home page by default
  loadPageContent('home');
});
