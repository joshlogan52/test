document.addEventListener("DOMContentLoaded", function() {
    // Fetch and inject content for each section
    fetchContent('content/home.html', 'main_content');

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