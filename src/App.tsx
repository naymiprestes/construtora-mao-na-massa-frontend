import RoutesApplication from "./routes";
import GlobalStyle from "./style/Global";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <RoutesApplication />
    </>
  );
}

export default App;
