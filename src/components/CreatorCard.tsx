import Creator from "../types";
import { Link } from "react-router-dom";

export default function CreatorCard(props: Creator) {
  const { name, url, description, imageURL, id } = props;

  return (
    <div>
      <img src={imageURL} alt={`Invalid Image URL, Image of ${name}`}></img>
      <h1>{name}</h1>
      <p>{url}</p>
      <p>{description}</p>
      <Link to={`/view/${id}`}>View More</Link>
      <Link to={`/edit/${id}`}>Edit</Link>
    </div>
  );
}
