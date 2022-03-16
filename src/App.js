import "./App.css";
import { GlobalStyle } from "./Styles/style";
import Header from "./Components/Header";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <div className="App">
        <Header />
      </div>
    </>
  );
}

export default App;
