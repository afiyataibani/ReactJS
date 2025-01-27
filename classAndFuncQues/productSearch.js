// 1. Product Search (Dynamic Search):
// Problem: Create a class component that displays a list of products and allows the user to search for products by name.
// Real-Life Example: You’re building a small product listing page where users can search for items like "Shirt" or "Pants" from a predefined list.

class ProductSearch {
    constructor() {
        this.container = document.getElementById("product-search");
        this.products = [
            "Shirt",
            "Pants",
            "Sweater",
            "Jacket",
            "Shoes",
            "Hat",
            "Gloves",
            "Socks",
            "Scarf",
            "Belt"
        ];
        this.filteredProducts = [...this.products]; 
        this.render();
    }

    render() {
        this.container.innerHTML = ""; 

        const heading = document.createElement("h1");
        heading.textContent = "1. Product Search";
        heading.style.textDecoration = "underline";

        const searchInput = document.createElement("input");
        searchInput.placeholder = "Search for products";
        searchInput.id = "search-input";
        searchInput.addEventListener("input", () => this.filterProducts(searchInput.value));

        const productList = document.createElement("ul");
        productList.id = "product-list";

        this.filteredProducts.forEach(product => {
            const listItem = document.createElement("li");
            listItem.style.fontSize = "20px";
            listItem.textContent = product;
            productList.appendChild(listItem);
        });

        this.container.appendChild(heading);
        this.container.appendChild(searchInput);
        this.container.appendChild(productList);
    }

    filterProducts(query) {
        const lowerQuery = query.toLowerCase();
        this.filteredProducts = this.products.filter(product =>
            product.toLowerCase().includes(lowerQuery)
        );
        this.render(); 
    }
}

new ProductSearch();
