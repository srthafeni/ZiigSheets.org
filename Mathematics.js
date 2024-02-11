document.addEventListener("DOMContentLoaded", function() {
  // Get the menu list element
  var menuList = document.getElementById("menu-list");

  // Array of menu button names and URLs
  var menuButtons = [{
      name: "1st year",
      url: "1stMath.html"
    },
    {
      name: "2nd year",
      url: "2ndMath.html"
    },
    {
      name: "3rd year",
      url: "3rdMath.html"
    },
    {
      name: "4th year",
      url: "4thMath.html"
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