const products = [
    {name: "a", price: 4, description: "a", category: "a", inStock: true},
    {name: "Nintendo Wii", price: 199.99, description: "Good condition Nintendo Wii system", category: "Entertainment", inStock: false},
    {name: "a", price: 4, description: "a", category: "a", inStock: true}
];

function formatPrice(price){ //make 9999.9999 turn into "$9999.99""
    return "$" + price.toFixed(2);
}

function createProductCard(productOBJ){
    return `
        <section class="product-card">
            <h2>${productOBJ.name}</h2>
            <div>${formatPrice(productOBJ.price)}</div>
            <p>${productOBJ.description}</p>
            <span>${productOBJ.category}</span>
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

renderProducts();