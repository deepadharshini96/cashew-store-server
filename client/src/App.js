import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import Store from './pages/Store';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Address from './pages/Address';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Offers from './pages/Offers';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [profile, setProfile] = useState({ name: '', email: '', phone: '' });
  const [toast, setToast] = useState('');
  const navigate = useNavigate();

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(''), 2500);
  };

  const addToCart = (product, quantity = 1) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    showToast(`${product.name} added to cart!`);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    showToast("Item removed from cart");
  };

  const placeOrder = (product, quantity = 1) => {
    setCheckoutItems([{ ...product, quantity }]);
    navigate('/checkout');
  };

  const placeOrderFromCart = () => {
    setCheckoutItems(cart);
    navigate('/checkout');
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
      showToast(`${product.name} removed from wishlist`);
    } else {
      setWishlist([...wishlist, product]);
      showToast(`${product.name} added to wishlist!`);
    }
  };

  const addAddress = (address) => {
    setAddresses([...addresses, address]);
    showToast("Address saved!");
  };

  const deleteAddress = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
    showToast("Address removed");
  };

  const confirmOrder = (address, paymentMethod) => {
    const newOrder = {
      id: Date.now(),
      items: checkoutItems,
      total: checkoutItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      address,
      paymentMethod,
      date: new Date().toLocaleDateString(),
      status: "Placed",
    };
    setOrders([newOrder, ...orders]);

    const cartItemIds = cart.map((item) => item.id);
    const checkoutItemIds = checkoutItems.map((item) => item.id);
    const wasFromCart = checkoutItemIds.every((id) => cartItemIds.includes(id)) && checkoutItems.length === cart.length;
    if (wasFromCart) {
      setCart([]);
    }
    setCheckoutItems([]);
    showToast("Order confirmed successfully! 🎉");
  };

  const advanceOrderStatus = (orderId) => {
    const stages = ["Placed", "Packed", "Shipped", "Delivered"];
    setOrders(orders.map((order) => {
      if (order.id === orderId) {
        const currentIndex = stages.indexOf(order.status);
        const nextStatus = stages[Math.min(currentIndex + 1, stages.length - 1)];
        return { ...order, status: nextStatus };
      }
      return order;
    }));
  };

  const updateProfile = (updatedProfile) => {
    setProfile(updatedProfile);
    showToast("Profile updated!");
  };

  const signUp = (userDetails) => {
    setProfile({ name: userDetails.name, email: userDetails.email, phone: userDetails.phone });
    showToast("Account created successfully! 🎉");
  };

  const withNavbar = (element) => (
    <>
      <Navbar cartCount={cart.length} />
      {element}
      <Footer />
    </>
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage onEnterStore={() => navigate('/store')} />} />
        <Route path="/store" element={withNavbar(
          <Store onAddToCart={addToCart} onPlaceOrder={placeOrder} onToggleWishlist={toggleWishlist} wishlist={wishlist} />
        )} />
        <Route path="/product/:id" element={withNavbar(
          <ProductDetail onAddToCart={addToCart} onPlaceOrder={placeOrder} onToggleWishlist={toggleWishlist} wishlist={wishlist} />
        )} />
        <Route path="/signin" element={withNavbar(<SignIn />)} />
        <Route path="/signup" element={withNavbar(<SignUp onSignUp={signUp} />)} />
        <Route path="/cart" element={withNavbar(
          <Cart cart={cart} onPlaceOrder={placeOrderFromCart} onRemoveFromCart={removeFromCart} />
        )} />
        <Route path="/wishlist" element={withNavbar(<Wishlist wishlist={wishlist} onAddToCart={addToCart} />)} />
        <Route path="/address" element={withNavbar(
          <Address addresses={addresses} onAddAddress={addAddress} onDeleteAddress={deleteAddress} />
        )} />
        <Route path="/profile" element={withNavbar(
          <Profile profile={profile} addresses={addresses} orders={orders} onUpdateProfile={updateProfile} />
        )} />
        <Route path="/orders" element={withNavbar(<Orders orders={orders} onAdvanceStatus={advanceOrderStatus} />)} />
        <Route path="/offers" element={withNavbar(
          <Offers onAddToCart={addToCart} onPlaceOrder={placeOrder} onToggleWishlist={toggleWishlist} wishlist={wishlist} />
        )} />
        <Route path="/checkout" element={withNavbar(
          <Checkout checkoutItems={checkoutItems} addresses={addresses} onAddAddress={addAddress} onConfirmOrder={confirmOrder} />
        )} />
        <Route path="/about" element={withNavbar(<AboutUs />)} />
<Route path="/contact" element={withNavbar(<ContactUs />)} />
<Route path="*" element={withNavbar(<NotFound />)} />
      </Routes>
      <Toast message={toast} />
    </>
  );
}

export default App;