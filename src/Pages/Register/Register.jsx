import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../assets/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { register } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    register(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "Success!",
          text: "Registered successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-center">
          <h1 className="text-2xl lg:text-4xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
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
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <p>
                Already have an account? <Link to="/login">Login now!!</Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
