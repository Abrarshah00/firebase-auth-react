import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "src/config/firebase.config.js";

const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result?.user;
      console.log("user----", user);
      if (user) {
        console.log("user", user);
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      Login
      <button onClick={() => signInWithGoogle()}>Google SignIn</button>
    </div>
  );
};

export default Login;
