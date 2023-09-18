import "./App.css";
import Handler from "src/Routes/Handler";
import { AuthContext } from "src/context/AuthProvider";

function App() {
  return (
    <AuthContext>
      <Handler />
    </AuthContext>
  );
}

export default App;
