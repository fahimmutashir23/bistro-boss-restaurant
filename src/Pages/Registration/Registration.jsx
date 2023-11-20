import vectorImage from "../../assets/others/authentication2.png";
import background from "../../assets/others/authentication.png";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const imgHostingData = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMG_API_KEY
}`;

const Registration = () => {
  const { signUp, logOut, updateUser } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const axiosPublic = useAxiosPublic();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.files[0];
    const imageFile = { image: image };

    const res = await axiosPublic.post(imgHostingData, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      setProfile(res.data.data.display_url);
    }

    signUp(email, password).then((result) => {
      if (result.user) {
        Swal.fire({
          title: "successfully Register",
          text: "Please login",
          icon: "success",
          confirmButtonText: "Cool",
        });
        const user = { name, email, password, profile };
        axiosPublic.post("/users", user).then((res) => console.log(res.data));

        updateUser({
          displayName: name,
          photoURL: profile,
        });
        logOut();
        navigate("/login");
      }
    });
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="hero min-h-screen"
      >
        <div className="hero-content flex-col lg:flex-row-reverse my-10 shadow-2xl bg-transparent">
          <div className="text-center lg:text-left">
            <img src={vectorImage} alt="" />
          </div>

          <div className="card w-full max-w-sm">
            <h1 className="text-3xl font-bold text-center">Sign Up now!</h1>

            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  name="name"
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
                  name="email"
                  className="input input-bordered rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Photo</span>
                </label>
                <input
                  type="file"
                  name="image"
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
                  name="password"
                  className="input input-bordered rounded-md"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary rounded-md">
                  Sign Up
                </button>
              </div>
              <p className="text-orange-500 text-sm text-center mt-4">
                Already Registered?
                <Link to="/login" className="font-semibold">
                  Go to Login
                </Link>
              </p>
              <p className="font-semibold text-center text-sm">
                or Sign Up with
              </p>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
