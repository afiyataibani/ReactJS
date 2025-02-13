E-Commerce React App
This is a simple E-Commerce web application built using React. It features product listing, cart functionality, and a navigation bar with a cart item count.

Features
Product Listing with images, names, and prices
Shopping Cart functionality with item quantity management
Increase and decrease quantity of cart items
Remove items from the cart
Fixed Navbar with dynamic cart item count
Responsive UI for a smooth user experience
Installation
To run the project locally, follow these steps:

    git clone <repository-url>
    cd ecommerce-app
    npm install
    npm start
    
Project Structure
src/App.js - Main application file, manages state and components
src/components/Navbar.js - Navigation bar with cart count
src/components/ProductLists.js - Displays available products and handles "Add to Cart"
src/components/ProductCart.js - Handles cart functionality including remove and quantity adjustment
src/components/Footer.js - Footer component
src/App.css - CSS styles for the entire application
Usage
Once the application is running:

Browse through the product listings.
Click the "Add to Cart" button on any product to add it to the cart.
The cart icon in the navbar updates dynamically to reflect the total item count.
Navigate to the cart section to view added products.
Use the remove button to delete an item or adjust its quantity.
The total cart value is dynamically updated.
Technologies Used
React (Functional Components, Hooks)
React Icons for UI enhancements
CSS for styling
Future Enhancements
Integration with a backend for product management
Authentication and user management
Payment gateway integration
Wishlist functionality
Author
Developed by Afiya Taibani

License
© 2025 Afiya Taibani. All rights reserved.