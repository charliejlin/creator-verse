import { Link } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import Header from "./components/Header";
import "@picocss/pico/css/pico.min.css";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={`${styles.container}`}>
      <Header />
      <ShowCreators />
    </div>
  );
}

export default App;
