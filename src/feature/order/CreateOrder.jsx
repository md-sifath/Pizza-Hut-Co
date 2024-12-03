import { Form, useActionData, useNavigation, redirect } from "react-router-dom";
import { createOrder } from "../../service/apiRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../cart/cartSlice";

import Button from "../../ui/Button";
import store from "../../store";
import EmptyCart from "../cart/EmptyCart";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const cart = useSelector(getCart);
  const formErros = useActionData();

  const dispatch = useDispatch();

  if (!cart?.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" required />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
          </div>
          {formErros?.phone && (
            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
              {formErros.phone}
            </p>
          )}
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting ? "Placing order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const orderData = await request.formData();
  const data = Object.fromEntries(orderData);
  console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
  };
  const errors = {};

  if (!isValidPhone(order.phone)) {
    errors.phone = "Please correct your phone number.";
  }

  if (Object.keys(errors).length > 0) return errors;

  // if everything is okay then place new order
  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
