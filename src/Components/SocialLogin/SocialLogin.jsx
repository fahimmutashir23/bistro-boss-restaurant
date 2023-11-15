import { BsGoogle } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const {googleSignIn} = useAuth()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn().then(() => {
            Swal.fire(
              "Log In successful",
              "Thank you to login our website",
              "success"
            ) && navigate(location?.state ? location.state : "/")
          })
    }

    return (
        <div className="flex gap-3 mx-auto">
                <div onClick={handleGoogleSignIn} className="border border-black p-2 rounded-full max-w-fit cursor-pointer">
                  <BsGoogle className="text-gray-700 text-xs"></BsGoogle>
                </div>
                <div className="border border-black p-2 rounded-full max-w-fit">
                  <FaFacebook className="text-gray-700 text-xs"></FaFacebook>
                </div>
                <div className="border border-black p-2 rounded-full max-w-fit">
                  <FaGithub className="text-gray-700 text-xs"></FaGithub>
                </div>
              </div>
    );
};

export default SocialLogin;