"use client";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";

const Cartpage = () => {
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [users, setUsers] = useState([]);

  const cars = [
    { id: 1, name: "Nissan GT-R", price: 80, image: "/car12.png" },
    { id: 2, name: "Koenigsegg", price: 99, image: "/car13.png" },
    { id: 3, name: "Rolls-Royce", price: 96, image: "/car14.png" },
  ];

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  


  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  

  const addToCart = (car) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === car.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === car.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...car, quantity: 1 }];
    });
    showToast(`${car.name} added to cart`);
  };

  const removeFromCart = (id) => {
    const item = cart.find((item) => item.id === id);
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    showToast(`${item.name} removed from cart`);
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
    showToast("Cart cleared");
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 2000);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    if (cart.length === 0) {
      showToast("Your cart is empty!");
      return;
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const userData = await response.json();
        console.log("Fetched user data:", userData);
        setCart([]); // Clear cart after successful order
        showToast("Order placed successfully with user details!");
      } else {
        const errorData = await response.json();
        showToast(`Error: ${errorData.message || "Failed to place order"}`);
      }
    } catch (error) {
      console.error("Error during API call:", error);
      showToast("Error: Unable to connect to the server");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen">
      {toastMessage && (
        <div className="fixed top-4 right-4 bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-lg">
          {toastMessage}
        </div>
      )}

      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-indigo-500">MORENT</div>
        <div className="hidden sm:flex items-center bg-gray-100 px-4 py-2 rounded-full w-1/2">
          <input
            type="text"
            placeholder="Search something here"
            className="bg-transparent outline-none w-full text-sm text-gray-700"
          />
        </div>
        <div className="flex items-center space-x-6">
          <FaHeart className="text-gray-500 text-lg hover:text-red-500" />
          <BsBell className="text-gray-500 text-lg hover:text-indigo-500" />
          <AiOutlineSetting className="text-gray-500 text-lg hover:text-indigo-500" />
          <button
            onClick={() => setCartVisible(!cartVisible)}
            className="bg-indigo-500 text-white py-1 px-4 rounded hover:bg-indigo-600"
          >
            Cart ({cart.length})
          </button>
        </div>
      </nav>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Available Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="font-bold text-lg">{car.name}</h3>
              <p className="text-gray-500 mb-2">${car.price}.00</p>
              <button
                onClick={() => addToCart(car)}
                className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {cartVisible && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button
                onClick={clearCart}
                className="text-red-500 flex items-center space-x-2 hover:text-red-600"
              >
                <FiTrash2 />
                <span>Clear Cart</span>
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-gray-500">${item.price}.00</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="bg-gray-200 text-gray-700 rounded px-2"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="bg-gray-200 text-gray-700 rounded px-2"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="text-right mt-4">
              <h3 className="text-lg font-bold text-gray-700">
                Total: ${totalPrice.toFixed(2)}
              </h3>
              <button
                onClick={handleCheckout}
                className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">User Details</h2>
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="bg-white p-4 rounded shadow-md">
              <h3 className="font-bold">{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cartpage;






