import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoutesMain from "./routes";
import GlobalStyle from "./styles/global";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
