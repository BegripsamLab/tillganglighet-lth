const menuItems = [
  {
    name: "Classic Espresso",
    price: "$3.50",
    description: "Rich and bold, our signature espresso blend",
  },
  {
    name: "Cappuccino",
    price: "$4.50",
    description: "Perfectly balanced espresso with steamed milk and foam",
  },
  {
    name: "Caramel Latte",
    price: "$5.00",
    description: "Smooth espresso with steamed milk and sweet caramel",
  },
  {
    name: "Iced Mocha",
    price: "$5.50",
    description: "Cool and refreshing with rich chocolate and espresso",
  },
  {
    name: "Cold Brew",
    price: "$4.00",
    description: "Smooth, naturally sweet cold-steeped coffee",
  },
  {
    name: "Vanilla Macchiato",
    price: "$5.25",
    description: "Layered espresso with vanilla and milk foam",
  },
];

function renderMenu() {
  const menuGrid = document.getElementById("menuGrid");

  menuItems.forEach((item) => {
    const menuCard = document.createElement("div");
    menuCard.className = "menu-item";
    menuCard.setAttribute("tabindex", "-1");

    menuCard.innerHTML = `
      <div style="font-size: 1.3rem; margin-bottom: 8px; color: #2c1810;">${item.name}</div>
      <div class="menu-item-price">${item.price}</div>
      <div style="color: #666666; font-size: 0.95rem; line-height: 1.6;">${item.description}</div>
    `;

    menuGrid.appendChild(menuCard);
  });
}

function scrollToMenu() {
  const menuSection = document.getElementById("menu");
  menuSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

window.scrollToMenu = scrollToMenu;

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
});
