document.addEventListener("DOMContentLoaded", function() {
    // Get the side navigation bar element
    var menu = document.getElementById("menu");

    // Add event listeners to navigation links
    document.getElementById("home-link").addEventListener("click", function(event) {
        event.preventDefault();
        loadContent("home");
    });
    document.getElementById("learn-to-sail-link").addEventListener("click", function(event) {
        event.preventDefault();
        loadContent("learn_to_sail");
    });
    document.getElementById("navigation-link").addEventListener("click", function(event) {
        event.preventDefault();
        loadContent("navigation");
    });
    document.getElementById("boat-ownership-link").addEventListener("click", function(event) {
        event.preventDefault();
        loadContent("boat_ownership");
    });

    // Add event listeners to submenu links
    var submenuLinks = document.querySelectorAll(".submenu a");
    submenuLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            // Extract pageId from link's href attribute
            var pageId = link.getAttribute("href").substring(1);
            loadContent(pageId);
        });
    });
});

function loadContent(pageId) {
    // Fetch and inject content for the specified page ID
    var contentUrl = "/content/" + pageId + ".html";
    var containerId = "main_content";
    fetchContent(contentUrl, containerId);
}

function fetchContent(url, containerId) {
    fetch(url)
    .then(response => response.text())
    .then(content => {
        document.getElementById(containerId).innerHTML = content;
    })
    .catch(error => console.error('Error fetching content:', error));
}
