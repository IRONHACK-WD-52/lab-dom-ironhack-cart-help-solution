// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector(".price span").innerText);
  const quantity = Number(product.querySelector(".quantity input").value);
  const subtotal = price * quantity;
  product.querySelector(".subtotal span").innerText = subtotal.toFixed(2); // Fixa o número em duas casas decimais

  return subtotal;
}

function calculateAll() {
  let total = 0;
  const products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  // const totalContainer = document.getElementById("total-value");
  // totalContainer.firstElementChild.innerText = total.toFixed(2);

  const totalPlace = document.querySelector("#total-value span");
  totalPlace.innerText = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const buttonHolder = target.parentElement;
  const productToBeRemoved = buttonHolder.parentElement;
  productToBeRemoved.parentElement.removeChild(productToBeRemoved);

  // target.parentElement.parentElement.parentElement.removeChild(target.parentElement.parentElement);
}

// ITERATION 5

function createProduct() {
  const newProductName = document.getElementById("new-product-name");
  const newProductPrice = document.getElementById("new-product-price");

  const productList = document.getElementById("product-list");
  productList.innerHTML += `<tr class="product">
  <td class="name">
    <span>${newProductName.value}</span>
  </td>
  <td class="price">$<span>${newProductPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;
  newProductName.value = "";
  newProductPrice.value = 0;
  addRemoveEvent();
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  addRemoveEvent();
  const addButton = document.getElementById("create");
  addButton.onclick = createProduct;
});

function addRemoveEvent() {
  const removeButtons = document.getElementsByClassName("btn-remove");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].onclick = removeProduct;
  }
}
