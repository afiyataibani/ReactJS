import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Products from './components/Products'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  const products = [
    {
      id: 1,
      name: 'Mobile',
      price: 500,
      image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708674162/Croma%20Assets/Communication/Mobiles/Images/300785_0_ec7bzx.png',
    },
    {
      id: 2,
      name: 'Laptop',
      price: 700,
      image: 'https://inventstore.in/wp-content/uploads/2023/04/macbook-air-m2-midnight.png',
    },
    {
      id: 3,
      name: 'iPad',
      price: 650,
      image: 'https://www.yaphone.com/6153-thickbox_default/apple-ipad-pro-13-m4-2024.jpg',
    },
    {
      id: 4,
      name: 'Airpods Pro',
      price: 450,
      image: 'https://www.sathya.store/img/product/jnqZ4CVKk05d05MM.webp',
    },
    {
      id: 5,
      name: 'Headphones',
      price: 350,
      image: 'https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/b/l/blue-01-solo4.jpg.large.2x_1.png',
    },
    {
      id: 6,
      name: 'Watch',
      price: 470,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUziXlgvfs5U3eFzNp9HBXvE1E5alUlinOBg&s',
    },
  ]

  const [cartItem, setCartItem] = useState([])

  const cartItemCount = cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const onAddToCart = (product) => {
    setCartItem((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const onRemovingCard = (productId) => {
    setCartItem((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    )
  }

  const onRemoveFromCart = (productId) => {
    setCartItem((e) => {
      return e
        .map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <NavBar cartItemCount={cartItemCount} />

      {/* Product Section */}
      <div style={{ 
  display: "flex", 
  flexWrap: "wrap", 
  gap: "20px", 
  justifyContent: "center", 
  marginTop: "20px"  
}}>
  {products.map((product) => (
    <Products key={product.id} product={product} onAddToCart={onAddToCart} />
  ))}
</div>
      <Cart items={cartItem} onRemoveFromCart={onRemoveFromCart} onRemovingCard={onRemovingCard} />
      <Footer/> 
    </div>
  );
}

export default App;
