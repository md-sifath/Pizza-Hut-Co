import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../service/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <>
      {/* <h1 className="mb-4 mt-4 text-center text-4xl italic text-stone-800">
        <span className="mt-2 text-5xl text-green-400">P</span>izza{" "}
        <span className="mt-2 text-5xl text-green-400">M</span>enu
      </h1> */}
      <ul className="divide-y-2 divide-stone-300 px-2">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
