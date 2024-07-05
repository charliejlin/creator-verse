import Creator from "../types";

export default function CreatorCard(props: Creator) {
  const { name, url, description, imageURL } = props;

  return (
    <a href={url}>
      <div>
        <img src={imageURL}></img>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </a>
  );
}
