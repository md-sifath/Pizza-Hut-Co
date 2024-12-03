import { useSelector } from "react-redux";

function UserName() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="hidden text-sm font-semibold uppercase sm:block">
      {userName}
    </div>
  );
}

export default UserName;
