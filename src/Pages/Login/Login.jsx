import vectorImage from "../../assets/others/authentication2.png";
import background from "../../assets/others/authentication.png";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import ReactCaptcha from 'modern-react-captcha';
import { useState } from "react";
import reloadIcon from "../../assets/icon/reload.png"


const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password };
    console.log(user);
    signIn(email, password).then((result) => {
      if (result.user) {
        Swal.fire({
          title: "successfully Login",
          text: "text",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/");
        e.target.reset();
      }
    });
  };

  const handleSuccess = () => {
    setDisable(false)
  }
	const handleFailure = () => {
    
  }

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="hero min-h-screen"
      >
        <div className="hero-content flex-col lg:flex-row my-10 shadow-2xl bg-transparent">
          <div className="text-center lg:text-left">
            <img src={vectorImage} alt="" />
          </div>

          <div className="card w-full max-w-sm">
            <h1 className="text-3xl font-bold text-center">Login now!</h1>

            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
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
              <div>
                <ReactCaptcha
                  charset="uln"
                  length={6}
                  color="black"
                  bgColor="transparent"
                  reload={true}
                  reloadIcon={reloadIcon}
                  reloadText="Reload Text"
                  handleSuccess={handleSuccess}
                  handleFailure={handleFailure}
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary rounded-md" disabled={disable}>
                  Login
                </button>
              </div>
              <p className="text-orange-500 text-sm text-center mt-4">
                New here?
                <Link to="/registration" className="font-semibold">
                  Create a New Account
                </Link>
              </p>
              <p className="font-semibold text-center text-sm">
                or Sign in with
              </p>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
