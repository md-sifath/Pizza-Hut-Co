import { Link } from "react-router-dom";
import SearchOrder from "../feature/order/SearchOrder";
import UserName from "../feature/user/UserName";

function Header() {
  return (
    <header className="flex items-center justify-between bg-green-500 px-4 py-4 text-green-800">
      <Link to="/" className="tracking-widest">
        Pizza Hut Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
