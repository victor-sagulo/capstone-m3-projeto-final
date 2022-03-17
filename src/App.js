import "./App.css";
import { GlobalStyle } from "./Styles/style";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import LikedGames from "./Components/LikedGames";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <div className="App">
        <LikedGames />
        <Routes />
      </div>
    </>
  );
}

export default App;
