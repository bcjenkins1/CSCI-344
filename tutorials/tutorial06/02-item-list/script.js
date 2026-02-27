const items= ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'];
const itemListEl = document.querySelector("#itemList");

function displayItems() {
itemListEl.innerHTML = "";
for(let i = 0; i < items.length; i++){
    const itemstr = `<li>${items[i] }</li>`;
    itemListEl.insertAdjacentHTML(`beforeend`,itemstr);
    }
}

displayItems();