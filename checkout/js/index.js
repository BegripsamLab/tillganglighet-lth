// Deliberately inaccessible JavaScript for educational purposes

// Order management
let orderData = {
  subtotal: 1747,
  shipping: 89,
  taxRate: 0.25,
  addedProducts: [],
  baseProducts: [
    {
      id: "headphones",
      name: "Trådlösa Bluetooth-hörlurar",
      price: 1299,
      quantity: 1,
    },
    { id: "case", name: "Mobilskal", price: 124.5, quantity: 2 },
    { id: "cable", name: "USB-C Laddkabel", price: 199, quantity: 1 },
  ],
};

function addProduct(id, name, price) {
  // Check if product already exists
  const existingProduct = orderData.addedProducts.find((p) => p.id === id);

  if (existingProduct) {
    existingProduct.quantity += 1;
    updateProductDisplay(existingProduct);
  } else {
    const product = {
      id: id,
      name: name,
      price: price,
      quantity: 1,
    };
    orderData.addedProducts.push(product);
    addProductToDisplay(product);
  }

  updateOrderTotals();

  // Deliberately poor feedback - no screen reader announcement
}

function changeQuantity(productId, change) {
  // Check if it's a base product
  const baseProduct = orderData.baseProducts.find((p) => p.id === productId);
  if (baseProduct) {
    const newQuantity = baseProduct.quantity + change;
    if (newQuantity <= 0) {
      removeProduct(productId);
      return;
    }
    baseProduct.quantity = newQuantity;
    updateBaseProductDisplay(baseProduct);
    updateOrderTotals();
    return;
  }

  // Check if it's an added product
  const addedProduct = orderData.addedProducts.find((p) => p.id === productId);
  if (addedProduct) {
    const newQuantity = addedProduct.quantity + change;
    if (newQuantity <= 0) {
      removeProduct(productId);
      return;
    }
    addedProduct.quantity = newQuantity;
    updateProductDisplay(addedProduct);
    updateOrderTotals();
  }
}

function removeProduct(productId) {
  // Check if it's a base product
  const baseProductIndex = orderData.baseProducts.findIndex(
    (p) => p.id === productId
  );
  if (baseProductIndex !== -1) {
    orderData.baseProducts.splice(baseProductIndex, 1);
    const productElement = document
      .querySelector(`#price-${productId}`)
      .closest(".product-item");
    productElement.remove();
    updateOrderTotals();
    return;
  }

  // Check if it's an added product
  const addedProductIndex = orderData.addedProducts.findIndex(
    (p) => p.id === productId
  );
  if (addedProductIndex !== -1) {
    orderData.addedProducts.splice(addedProductIndex, 1);
    const productElement = document.getElementById(`product-${productId}`);
    if (productElement) {
      productElement.remove();
    }
    updateOrderTotals();
  }
}

function changeQuantity(productId, change) {
  // Check if it's a base product
  const baseProduct = orderData.baseProducts.find((p) => p.id === productId);
  if (baseProduct) {
    const newQuantity = baseProduct.quantity + change;
    if (newQuantity <= 0) {
      removeProduct(productId);
      return;
    }
    baseProduct.quantity = newQuantity;
    updateBaseProductDisplay(baseProduct);
    updateOrderTotals();
    return;
  }

  // Check if it's an added product
  const addedProduct = orderData.addedProducts.find((p) => p.id === productId);
  if (addedProduct) {
    const newQuantity = addedProduct.quantity + change;
    if (newQuantity <= 0) {
      removeProduct(productId);
      return;
    }
    addedProduct.quantity = newQuantity;
    updateProductDisplay(addedProduct);
    updateOrderTotals();
  }
}

function removeProduct(productId) {
  // Check if it's a base product
  const baseProductIndex = orderData.baseProducts.findIndex(
    (p) => p.id === productId
  );
  if (baseProductIndex !== -1) {
    orderData.baseProducts.splice(baseProductIndex, 1);
    const productElement = document
      .querySelector(`#price-${productId}`)
      .closest(".product-item");
    productElement.remove();
    updateOrderTotals();
    return;
  }

  // Check if it's an added product
  const addedProductIndex = orderData.addedProducts.findIndex(
    (p) => p.id === productId
  );
  if (addedProductIndex !== -1) {
    orderData.addedProducts.splice(addedProductIndex, 1);
    const productElement = document.getElementById(`product-${productId}`);
    if (productElement) {
      productElement.remove();
    }
    updateOrderTotals();
  }
}

function updateBaseProductDisplay(product) {
  document.getElementById(`qty-${product.id}`).textContent = product.quantity;
  document.getElementById(`price-${product.id}`).textContent = `${Math.round(
    product.price * product.quantity
  )} kr`;
}

function addProductToDisplay(product) {
  const addedProductsContainer = document.getElementById("added-products");

  const productElement = document.createElement("div");
  productElement.className = "product-item";
  productElement.id = `product-${product.id}`;

  // Get the correct image URL based on product ID
  const imageUrls = {
    mouse:
      "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
    keyboard:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
    webcam:
      "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
  };

  const imageUrl = imageUrls[product.id] || "";
  const imageHtml = imageUrl
    ? `<img src="${imageUrl}" class="product-image" alt="${product.name}">`
    : '<div class="product-image-placeholder"></div>';

  const btn = event.target;
  const originalText = btn.textContent;
  btn.textContent = "Tillagd!";
  btn.style.backgroundColor = "#28a745";

  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.backgroundColor = "";
  }, 1000);

  productElement.innerHTML = `
        ${imageHtml}
        <div class="product-details">
            <div class="product-name">${product.name}</div>
            <div class="product-description">Tillagd produkt</div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="changeQuantity('${
                  product.id
                }', -1)">-</button>
                <span class="quantity-display">Antal: <span id="qty-${
                  product.id
                }">${product.quantity}</span></span>
                <button class="quantity-btn" onclick="changeQuantity('${
                  product.id
                }', 1)">+</button>
                <button class="remove-btn" onclick="removeProduct('${
                  product.id
                }')">Ta bort</button>
            </div>
        </div>
        <div class="product-price" id="price-${product.id}">${
    product.price * product.quantity
  } kr</div>
    `;

  addedProductsContainer.appendChild(productElement);
}

function updateProductDisplay(product) {
  document.getElementById(`qty-${product.id}`).textContent = product.quantity;
  document.getElementById(`price-${product.id}`).textContent = `${
    product.price * product.quantity
  } kr`;
}

function updateOrderTotals() {
  // Calculate new subtotal
  const baseProductsTotal = orderData.baseProducts.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  const addedProductsTotal = orderData.addedProducts.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  const newSubtotal = baseProductsTotal + addedProductsTotal;
  const tax = Math.round(newSubtotal * orderData.taxRate);
  const total = newSubtotal + orderData.shipping + tax;

  // Update display
  document.getElementById("subtotal").textContent = `${newSubtotal} kr`;
  document.getElementById("tax").textContent = `${tax} kr`;
  document.getElementById("total").textContent = `${total} kr`;
}

document.addEventListener("DOMContentLoaded", function () {
  // Form is ready but provides no accessibility features
});

function validateForm() {
  const errors = [];
  const fields = {
    fname: "Förnamn",
    lname: "Efternamn",
    email: "E-postadress",
    address1: "Adress rad 1",
    city: "Stad",
    zip: "Postnummer",
    country: "Land",
    "ship-fname": "Leverans förnamn",
    "ship-lname": "Leverans efternamn",
    "ship-address1": "Leverans adress rad 1",
    "ship-city": "Leverans stad",
    "ship-zip": "Leverans postnummer",
    "ship-country": "Leverans land",
  };

  // Clear previous errors
  clearErrors();

  // Validate required fields
  Object.keys(fields).forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();

    if (!value) {
      errors.push(`${fields[fieldId]} är obligatoriskt`);
      field.classList.add("error");
    } else {
      field.classList.remove("error");
    }
  });

  // Email validation
  const email = document.getElementById("email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    errors.push("Vänligen ange en giltig e-postadress");
    document.getElementById("email").classList.add("error");
  }

  // ZIP code validation
  const zip = document.getElementById("zip").value;
  const shipZip = document.getElementById("ship-zip").value;
  const zipRegex = /^\d{3}\s?\d{2}$/;
  if (zip && !zipRegex.test(zip)) {
    errors.push("Vänligen ange ett giltigt postnummer");
    document.getElementById("zip").classList.add("error");
  }
  if (shipZip && !zipRegex.test(shipZip)) {
    errors.push("Vänligen ange ett giltigt leverans postnummer");
    document.getElementById("ship-zip").classList.add("error");
  }

  // Phone validation (if provided)
  const phone = document.getElementById("phone").value;
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phone && !phoneRegex.test(phone)) {
    errors.push("Vänligen ange ett giltigt telefonnummer");
    document.getElementById("phone").classList.add("error");
  }

  return errors;
}

function displayErrors(errors) {
  const errorContainer = document.getElementById("error-container");

  if (errors.length > 0) {
    let errorHtml =
      '<div style="color: #dc3545; font-weight: bold; margin-bottom: 10px;">Vänligen korrigera följande fel:</div>';

    errors.forEach((error) => {
      errorHtml += `<div class="error-message">${error}</div>`;
    });

    errorContainer.innerHTML = errorHtml;
    errorContainer.classList.add("show");

    // Deliberately poor focus management - no announcement to screen readers
    errorContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else {
    errorContainer.classList.remove("show");
  }
}

function clearErrors() {
  const errorContainer = document.getElementById("error-container");
  errorContainer.classList.remove("show");

  const errorFields = document.querySelectorAll(".input-field.error");
  errorFields.forEach((field) => {
    field.classList.remove("error");
  });
}

function submitForm() {
  const formContainer = document.querySelector(".form-container");
  const errors = validateForm();

  if (errors.length > 0) {
    displayErrors(errors);
    return;
  }

  // Show loading state
  formContainer.classList.add("loading");

  // Simulate AJAX submission
  setTimeout(() => {
    formContainer.classList.remove("loading");

    // Simulate successful submission
    const errorContainer = document.getElementById("error-container");
    errorContainer.innerHTML =
      '<div style="color: #28a745; font-weight: bold; padding: 15px; background-color: #d4edda; border: 1px solid #c3e6cb; border-radius: 4px;">✓ Beställning genomförd! Du kommer att få ett bekräftelsemail inom kort.</div>';
    errorContainer.classList.add("show");

    // Deliberately poor success handling - no screen reader announcement
    setTimeout(() => {
      if (confirm("Beställning genomförd! Vill du göra en ny beställning?")) {
        clearForm();
      }
    }, 1000);
  }, 2000);
}

function clearForm() {
  const inputs = document.querySelectorAll(".input-field");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  inputs.forEach((input) => {
    input.value = "";
    input.classList.remove("error");
  });

  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  clearErrors();

  // No focus management after clearing
}

// Deliberately poor keyboard navigation
document.addEventListener("keydown", function (e) {
  // Trap focus inappropriately and provide no keyboard shortcuts
  if (e.key === "Tab") {
    // Let default behavior happen but provide no visual focus indicators
  }
});

// Add some mouse-only interactions
document.querySelectorAll(".checkbox-group").forEach((group) => {
  group.addEventListener("click", function (e) {
    if (e.target.tagName !== "INPUT") {
      const checkbox = this.querySelector('input[type="checkbox"]');
      checkbox.checked = !checkbox.checked;
    }
  });
});
