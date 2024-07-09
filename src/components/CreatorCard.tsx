import Creator from "../types";
import { Link } from "react-router-dom";
import styles from "../styles/CreatorCard.module.css";
import { CiLink, CiCircleInfo, CiEdit } from "react-icons/ci";

export default function CreatorCard(props: Creator) {
  const { name, url, description, imageURL, id } = props;

  return (
    <div
      className={`${styles.cardContainer}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.9) 100%), url(${imageURL}) `,
      }}
    >
      <div className={`${styles.cardContent}`}>
        <div className={`${styles.cardContentHeader}`}>
          <h2>{name}</h2>
          <div>
            <Link to={`/view/${id}`}>
              <CiCircleInfo />
            </Link>
            <Link to={`/edit/${id}`}>
              <CiEdit />
            </Link>
          </div>
        </div>
        <Link to={`${url}`} target="_blank">
          <CiLink id={`${styles.url}`} />
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}
