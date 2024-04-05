import "./App.css";
import AppRouter from "./router/AppRouter";

function App() {
  document.documentElement.style.setProperty("--bg-blur", `10px`);
  return <AppRouter />;
}

export default App;
