import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={`${styles.container}`}>
      <h1>THE CREATORVERSE</h1>
      <div className={`${styles.linkContainer}`}>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/add"}>
          <button>Add Creator</button>
        </Link>
      </div>
    </div>
  );
}
