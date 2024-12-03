import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { increaseQuantity, decreaseQuantity } from "./cartSlice";

function UpdateItemQuantity({ id, quantity }) {
  const dispatch = useDispatch();

  if (quantity)
    return (
      <div className="flex gap-2 md:gap-3">
        <Button type="round" onclick={() => dispatch(decreaseQuantity(id))}>
          -
        </Button>
        <p>{quantity}</p>
        <Button type="round" onclick={() => dispatch(increaseQuantity(id))}>
          +
        </Button>
      </div>
    );
}

export default UpdateItemQuantity;
