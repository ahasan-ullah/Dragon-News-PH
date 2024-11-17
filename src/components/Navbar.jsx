import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="font-semibold">{user && user.email?<p>{user.displayName}</p>:""}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className="">
          {user && user.email? 
            <div>
              <img className="w-16 h-16 rounded-full border object-cover" src={user?.photoURL}></img>
            </div>
            : 
            <div className=" ">
              <img src={userIcon} alt="" />
            </div>
          }
        </div>

        {user && user?.email ? (
          <button
            className="btn btn-neutral rounded-none px-8"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/auth/login"}
            className="btn btn-neutral rounded-none px-8"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
