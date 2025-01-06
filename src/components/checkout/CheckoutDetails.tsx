import { useCart } from '../../hooks/useCart'; // Assuming you are using a custom hook to fetch cart items

const CheckoutPage = () => {
  const { items } = useCart(); // Fetch the items from the cart (or you can use props if you pass them directly)

  return (
    <div className="checkout-container">
      <h1 className="text-xl font-bold mb-4">Checkout</h1>
      <div className="checkout-items">
        {items.map((item) => (
          <div key={item.id} className="checkout-item mb-6 p-4 border-b border-gray-300">
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">Storage: {item.storage}</p>
                <p className="text-sm text-gray-600">Color: {item.color}</p>
                <p className="text-sm text-gray-600">Condition: {item.condition}</p>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-lg font-semibold">Price: ${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;


// import { useCart } from "../../hooks/useCart";


// export function CheckoutDetails() {
//   const { items, total } = useCart();

//   return (
//     <div>
//       <h3 className="text-lg font-bold mb-4">Your Cart</h3>
//       <ul className="space-y-3">
//         {items.map((item) => (
//           <li key={item.id} className="flex items-center space-x-4">
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-16 h-16 object-cover rounded"
//             />
//             <div>
//               <p className="font-medium">{item.name}</p>
//               <p>
//                 ${item.price} × {item.quantity}
//               </p>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <p className="mt-4 font-bold text-xl">Total: ${total.toFixed(2)}</p>
//     </div>
//   );
// }
