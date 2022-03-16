import "./App.css";
import { GlobalStyle } from "./Styles/style";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <div className="App">
        <Routes />
      </div>
    </>
  );
}

export default App;
