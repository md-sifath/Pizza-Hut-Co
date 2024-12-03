import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getTotalQuantityOfPizza } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice, imageUrl } = item;
  console.log(item);
  const currentQuantity = useSelector(getTotalQuantityOfPizza(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        <img src={imageUrl} alt="pizza" className="h-16"></img>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity id={pizzaId} quantity={currentQuantity} />
        <DeleteItem id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
