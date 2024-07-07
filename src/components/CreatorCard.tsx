import Creator from "../types";
import { Link } from "react-router-dom";

export default function CreatorCard(props: Creator) {
  const { name, url, description, imageURL, id } = props;

  return (
    <div>
      <img src={imageURL}></img>
      <h1>{name}</h1>
      <p>{url}</p>
      <p>{description}</p>
      <Link to={`/view/${id}`}>View More</Link>
    </div>
  );
}
