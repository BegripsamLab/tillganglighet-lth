const products = [
  {
    id: 1,
    name: "Classic Espresso",
    price: 3.5,
    description:
      "Rich and bold, our signature espresso blend made from premium arabica beans",
    image:
      "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "2 oz",
    caffeine: "High",
    temperature: "Hot",
    ingredients: "Espresso beans, water",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 4.5,
    description:
      "Perfectly balanced espresso with steamed milk and velvety foam",
    image:
      "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "8 oz",
    caffeine: "Medium",
    temperature: "Hot",
    ingredients: "Espresso, steamed milk, milk foam",
  },
  {
    id: 3,
    name: "Caramel Latte",
    price: 5.0,
    description: "Smooth espresso with steamed milk and sweet caramel drizzle",
    image:
      "https://images.pexels.com/photos/7194915/pexels-photo-7194915.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "12 oz",
    caffeine: "Medium",
    temperature: "Hot",
    ingredients: "Espresso, steamed milk, caramel syrup",
  },
  {
    id: 4,
    name: "Iced Mocha",
    price: 5.5,
    description:
      "Cool and refreshing with rich chocolate and espresso over ice",
    image:
      "https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "16 oz",
    caffeine: "High",
    temperature: "Cold",
    ingredients: "Espresso, milk, chocolate syrup, ice",
  },
  {
    id: 5,
    name: "Cold Brew",
    price: 4.0,
    description:
      "Smooth, naturally sweet cold-steeped coffee, less acidic than traditional iced coffee",
    image:
      "https://images.pexels.com/photos/1339116/pexels-photo-1339116.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "16 oz",
    caffeine: "Very High",
    temperature: "Cold",
    ingredients: "Cold brew coffee, water, ice",
  },
  {
    id: 6,
    name: "Vanilla Macchiato",
    price: 5.25,
    description: "Layered espresso with vanilla and crowned with milk foam",
    image:
      "https://images.pexels.com/photos/5946968/pexels-photo-5946968.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "12 oz",
    caffeine: "Medium",
    temperature: "Hot",
    ingredients: "Espresso, vanilla syrup, steamed milk, foam",
  },
  {
    id: 7,
    name: "Flat White",
    price: 4.75,
    description: "Velvety microfoam poured over a double shot of espresso",
    image:
      "https://images.pexels.com/photos/8029713/pexels-photo-8029713.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "8 oz",
    caffeine: "High",
    temperature: "Hot",
    ingredients: "Double espresso, microfoam milk",
  },
  {
    id: 8,
    name: "Americano",
    price: 3.75,
    description:
      "Espresso shots topped with hot water for a smooth, rich flavor",
    image:
      "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "12 oz",
    caffeine: "High",
    temperature: "Hot",
    ingredients: "Espresso, hot water",
  },
];

function renderProducts() {
  const productsGrid = document.getElementById("productsGrid");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.onclick = () => openModal(product.id);
    productCard.setAttribute("tabindex", "-1");

    productCard.innerHTML = `
      <img src="${product.image}" class="product-image" />
      <div class="product-info">
        <div class="product-header">
          <div style="font-size: 1.4rem; color: #2c1810; font-weight: bold; flex: 1;">${
            product.name
          }</div>
          <div class="product-price">$${product.price.toFixed(2)}</div>
        </div>
        <div style="color: #666; font-size: 0.95rem; line-height: 1.6;">${
          product.description
        }</div>
        <div class="product-details">
          <div class="product-meta">
            <div style="color: #666; font-size: 0.9rem;">
              <span style="color: #2c1810; font-weight: bold;">Size:</span> ${
                product.size
              }
            </div>
            <div style="color: #666; font-size: 0.9rem;">
              <span style="color: #2c1810; font-weight: bold;">Caffeine:</span> ${
                product.caffeine
              }
            </div>
          </div>
        </div>
      </div>
    `;

    productsGrid.appendChild(productCard);
  });
}

function openModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
    <img src="${product.image}" class="modal-image" />
    <div style="font-size: 2rem; color: #2c1810; margin-bottom: 16px; font-weight: bold;">${
      product.name
    }</div>
    <div style="font-size: 1.5rem; color: #5c4033; margin-bottom: 16px; font-weight: bold;">$${product.price.toFixed(
      2
    )}</div>
    <div style="color: #666; font-size: 1.05rem; line-height: 1.8; margin-bottom: 24px;">${
      product.description
    }</div>

    <div class="modal-details">
      <div style="font-size: 1.2rem; color: #2c1810; margin-bottom: 12px; font-weight: bold;">Details</div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px;">
        <div>
          <div style="color: #2c1810; font-weight: bold; font-size: 0.9rem;">Size</div>
          <div style="color: #666;">${product.size}</div>
        </div>
        <div>
          <div style="color: #2c1810; font-weight: bold; font-size: 0.9rem;">Caffeine Level</div>
          <div style="color: #666;">${product.caffeine}</div>
        </div>
        <div>
          <div style="color: #2c1810; font-weight: bold; font-size: 0.9rem;">Temperature</div>
          <div style="color: #666;">${product.temperature}</div>
        </div>
        <div>
          <div style="color: #2c1810; font-weight: bold; font-size: 0.9rem;">Ingredients</div>
          <div style="color: #666;">${product.ingredients}</div>
        </div>
      </div>

      <div class="add-to-cart-btn" onclick="addToCart(${product.id})">
        Add to Cart
      </div>
    </div>
  `;

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  alert("Added " + product.name + " to cart!");
  closeModal();
}

window.openModal = openModal;
window.closeModal = closeModal;
window.addToCart = addToCart;

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});
