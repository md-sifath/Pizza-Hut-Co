import { useSelector } from "react-redux";
import CreateUser from "../feature/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.userName);

  return (
    <div className="my-10 h-auto bg-cover px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold text-stone-800 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username ? (
        <Button to="/menu" type="primary">
          Continue Ordering, {username}
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
