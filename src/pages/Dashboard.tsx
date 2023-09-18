import { signOut } from "firebase/auth";
import { auth } from "src/config/firebase.config.js";

const Dashboard = () => {
  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      Dashboard
      <button
        onClick={() => {
          handleSignOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
