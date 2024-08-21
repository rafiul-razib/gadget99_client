import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // const links = (
  //   <>
  //     <li>
  //       <NavLink to="/">Home</NavLink>
  //       <NavLink to="/login">Login</NavLink>
  //     </li>
  //   </>
  // );
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
        </div>
        <a className="btn btn-ghost text-xl">gadget99</a>
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div> */}
      <div className="navbar-end">
        <Link to={"/login"}>
          <button className="btn btn-neutral">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
