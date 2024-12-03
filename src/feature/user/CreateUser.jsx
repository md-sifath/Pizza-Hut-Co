import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { Link, useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    console.log(username);

    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="input mb-8 w-72"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Link
            to="/menu"
            className="inline-block h-12 w-32 rounded-full border bg-green-400 py-2.5 font-semibold text-green-800 transition-colors duration-300 hover:bg-green-300 focus:outline-none focus:ring focus:ring-green-400 focus:ring-offset-1"
            onClick={handleSubmit}
          >
            Start ordering
          </Link>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
