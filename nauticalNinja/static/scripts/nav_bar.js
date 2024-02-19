document.addEventListener("DOMContentLoaded", function() {
  // Array of navigation items
  var navItems = [
    { text: "Home", link: "/pages/home.html" },
    { text: "About", link: "#about" },
    { text: "Services", link: "#services" },
    { text: "Contact", link: "#contact" }
    // Add more navigation items as needed
  ];

  // Get the side navigation bar element
  var sidenav = document.getElementById("sidenav");

  // Generate navigation links dynamically
  navItems.forEach(function(item) {
    var link = document.createElement("a");
    link.textContent = item.text;
    link.href = item.link;
    sidenav.appendChild(link);
  });
});