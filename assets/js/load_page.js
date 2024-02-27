document.addEventListener("DOMContentLoaded", function() {
    // Fetch and inject content for each section
    fetchContent('content/home_page.html', 'home');

    // Fetch and inject content for other sections as needed
});

function fetchContent(url, containerId) {
    fetch(url)
    .then(response => response.text())
    .then(content => {
        document.getElementById(containerId).innerHTML = content;
    })
    .catch(error => console.error('Error fetching content:', error));
}