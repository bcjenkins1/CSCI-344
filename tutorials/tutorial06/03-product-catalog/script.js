const products = [
    {name: "a", price: 4, description: "a", category: "a", inStock: true},
    {name: "Nintendo Wii", price: 199.99, description: "Good condition Nintendo Wii system", category: "Electronics", inStock: false},
    {name: "a", price: 4, description: "a", category: "a", inStock: true}
];

function formatPrice(price){ //make 9999.9999 turn into "$9999.99""
    return "$" + price.toFixed(2);
}

function createProductCard(productOBJ){
    return `
        <section class="product-card">
            <h2>${productOBJ.name}</h2>
            <div class="price">${formatPrice(productOBJ.price)}</div>
            <p class="description">${productOBJ.description}</p>
            <span class="category">${productOBJ.category}</span>
            ${showInStockBadge(productOBJ.inStock)}
        </section>`;
}

function showInStockBadge(inStock) {
    if (inStock) {
        return `<span class = "stock-status in-stock">In Stock</span>`
    } else {
            return `<span class = "stock-status out-of-stock">Out of Stock</span>`
    }
}

function renderProducts(){
    productGrid.innerHTML = "";
    for(let i = 0; i < products.length; i++){
        productGridEl = createProductCard(products[i])
        productGrid.insertAdjacentHTML(`beforeend`,productGridEl);
    }

}

function addItemToList(event) {
  // Prevent the default form submission behavior (which would reload the page)
  event.preventDefault();
  // TODO: Add your code here
  const productNameEl = document.querySelector('#productName');
  const productPriceEl = document.querySelector('#productPrice');
  const productDescriptionEl = document.querySelector('#productDescription');
  const productCategoryEl = document.querySelector('#productCategory');
  const productInStockEl = document.querySelector('#productInStock');

  const newProduct = {
    name: productNameEl.value,
    price: Number(productPriceEl.value),
    description: productDescriptionEl.value,
    category: productCategoryEl.value,
    inStock: productInStockEl.checked //boolean
    };

    products.push(newProduct);

    //clear form
    document.querySelector("#productForm").reset();

    renderProducts();
  
}

const productForm = document.querySelector("#productForm");
productForm.addEventListener('submit', addItemToList);

renderProducts();