import "./App.css";
import { AllRoutes } from "./components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


const App = () =>{
  return (
    <div className="App">
      <AllRoutes />
      <ToastContainer autoClose={1000} position='top-right'/>
    </div>
  );
}

export default App;
