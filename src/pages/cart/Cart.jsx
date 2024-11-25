import { useContext } from "react"
import { shopContext } from "../../context/Shop-context"

export default function Cart() {

  const { shop, setShop } = useContext(shopContext);


  const removeFromCart = (id) => {
    setShop((prev) => prev.filter((item) => item.id !== id));

  };

  const totalPrice = shop.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, '')); // Remove "N" or "$"
    return total + price;
  }, 0);

  return (
    <div className="cart-page p-5">
      <h1 className="text-2xl font-bold mb-5">Your Cart</h1>

      {shop.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items space-y-4">
            {shop.map((item) => (
              <li key={item.id} className="flex items-center justify-between shadow-md p-4 rounded-md">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
                <div className="flex-1 ml-4">
                  <h2 className="font-bold">{item.title}</h2>
                  <p>{item.description}</p>
                  <p className="font-bold text-green-700">{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-2 rounded-md"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-summary mt-5">
            <h2 className="text-xl font-bold">Cart Summary</h2>
            <p className="text-lg">Total: <span className="font-bold text-green-700">N{totalPrice.toFixed(2)}</span></p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3">Checkout</button>
          </div>
        </>
      )}
    </div>

  )
}
