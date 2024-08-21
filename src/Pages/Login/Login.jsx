import { useContext } from "react";
import { AuthContext } from "../../assets/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {
  const { googleSignIn, login, logOut } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "Success!",
          text: "Logged in successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-center">
          <h1 className="text-2xl lg:text-4xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              Don't have an account? <Link to="/register">register now!!</Link>
            </p>
          </form>
          <div className="flex justify-center items-center">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-sm my-10 btn-primary"
            >
              Sign in With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
