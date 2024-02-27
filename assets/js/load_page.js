document.addEventListener("DOMContentLoaded", function() {
    // Define an array of section URLs and their corresponding container IDs
    var sections = [
        { url: '/content/home.html', containerId: 'main_content' },
        { url: '/content/learn_to_sail.html', containerId: 'learn_to_sail_content' },
        { url: '/content/navigation.html', containerId: 'navigation_content' },
        { url: '/content/boat_ownership.html', containerId: 'boat_ownership_content' }
        // Add more sections as needed
    ];

    // Fetch and inject content for each section
    sections.forEach(function(section) {
        fetchContent(section.url, section.containerId);
    });
});

function fetchContent(url, containerId) {
    fetch(url)
    .then(response => response.text())
    .then(content => {
        document.getElementById(containerId).innerHTML = content;
    })
    .catch(error => console.error('Error fetching content:', error));
}
