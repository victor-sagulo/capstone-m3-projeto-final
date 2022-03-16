import "./App.css";
import { GlobalStyle } from "./Styles/style";
import Header from "./Components/Header"
 
function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header/>
      </div>;
    </>
  );
}

export default App;
