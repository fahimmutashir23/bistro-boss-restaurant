import vectorImage from "../../assets/others/authentication2.png";
import background from "../../assets/others/authentication.png";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";


const Registration = () => {
    return (
        <div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="hero min-h-screen"
      >
        <div
          // style={{backgroundImage: `url(${background})`}}
          className="hero-content flex-col lg:flex-row-reverse my-10 shadow-2xl bg-transparent"
        >
          <div className="text-center lg:text-left">
            <img src={vectorImage} alt="" />
          </div>

          <div className="card w-full max-w-sm">
            <h1 className="text-3xl font-bold text-center">Sign Up now!</h1>

            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered rounded-md"
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
                  className="input input-bordered rounded-md"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary rounded-md">
                  Sign Up
                </button>
              </div>
              <p className="text-orange-500 text-sm text-center mt-4">
                Already Registered?
                <Link to="/login" className="font-semibold">Go to Login</Link>
              </p>
              <p className="font-semibold text-center text-sm">
                or Sign Up with
              </p>
              <div className="flex gap-3 mx-auto">
                <div className="border border-black p-2 rounded-full max-w-fit">
                  <BsGoogle className="text-gray-700 text-xs"></BsGoogle>
                </div>
                <div className="border border-black p-2 rounded-full max-w-fit">
                  <FaFacebookF className="text-gray-700 text-xs"></FaFacebookF>
                </div>
                <div className="border border-black p-2 rounded-full max-w-fit">
                  <FaGithub className="text-gray-700 text-xs"></FaGithub>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Registration;