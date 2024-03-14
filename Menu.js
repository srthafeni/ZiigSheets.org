document.addEventListener("DOMContentLoaded", function() {
  // Get the menu list element
  var menuList = document.getElementById("menu-list");

  // Array of menu button names and URLs
  var menuButtons = [{
      name: "Mathematics",
      url: "Mathematics.html"
    },
    {
      name: "Electrical Engineering",
      url: "electrical.html"
    },
    {
      name: "Mechanical Engineering",
      url: "Mechanical.html"
    },
    {
      name: "Chemical Engineering",
      url: "chemical.html"
    }
  ];

  // Create menu buttons dynamically
  menuButtons.forEach(function(button) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = button.url;
    a.className = "menu-button";
    a.textContent = button.name;
    li.appendChild(a);
    menuList.appendChild(li);
  });
});
