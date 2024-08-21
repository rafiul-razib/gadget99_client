import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../assets/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import logo from "../../assets/logo/portfolio_sign-removebg-preview.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Success!",
          text: "Logged out successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex justify-start items-center">
          <div className="w-1/12 mx-2">
            <img src={logo} alt="" />
          </div>
          <span className="text-3xl font-bold">Gears99</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleSignOut} className="btn btn-neutral">
            Log Out
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-neutral">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
