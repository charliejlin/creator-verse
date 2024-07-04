export default function CreatorCard(props: {
  name: string;
  url: string;
  description: string;
  imageURL: string;
}) {
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
