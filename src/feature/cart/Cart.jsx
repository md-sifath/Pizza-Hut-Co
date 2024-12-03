import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const username = useSelector((state) => state.user.userName);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className="px-4 py-3">
      <Link className="text-blue-400" to="/menu">
        &larr; Back to menu
      </Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y-2 divide-stone-300 border-b-2 border-t-2 border-b-stone-300 border-t-stone-300">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      {cart?.length > 0 && (
        <div className="mb-6 mt-6 flex flex-col gap-3 space-x-2 sm:block">
          <Button type="primary" to="/order/new">
            PROCED TO CHECKOUT
          </Button>
          <Button type="sceondary" onclick={() => dispatch(clearCart())}>
            Clear cart
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cart;
