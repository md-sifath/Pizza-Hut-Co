import Header from "./Header";
import CartOverView from "../feature/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";
import image from "../../src/utils/image/pizza.bg.jpg";
import {
  getToatalCartItem,
  getTotalCartPrice,
} from "../feature/cart/cartSlice";
import { useSelector } from "react-redux";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const totalItem = useSelector(getToatalCartItem);

  return (
    <>
      <div className="grid h-screen grid-rows-[auto_1fr_auto]">
        {isLoading && <Loading />}
        <Header />
        <div className="overflow-auto">
          <main className="mx-auto max-w-3xl">
            <Outlet />
          </main>
        </div>
        {totalItem && <CartOverView />}
      </div>
    </>
  );
}

export default AppLayout;
