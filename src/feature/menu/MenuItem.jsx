import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  function handleAddToCart() {
    const check = cart.find((item) => item.pizzaId === id);
    if (!check) {
      const newCartItem = {
        pizzaId: id,
        name,
        unitPrice,
        quantity: 1,
        imageUrl,
        totalPrice: unitPrice * 1,
      };
      dispatch(addItem(newCartItem));
    }
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-20 sm:h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-xs capitalize italic sm:text-sm">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm text-stone-900">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {!soldOut ? (
            <Button type="small" onclick={handleAddToCart}>
              Add to cart
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
