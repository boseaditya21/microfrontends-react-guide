import faker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    // Wrap the HTML in backticks to use string interpolation
    products += `<div>${name}</div>\n`;
}

document.querySelector("#dev-products").innerHTML = products;
