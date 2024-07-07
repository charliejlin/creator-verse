import { useParams } from "react-router-dom";

export default function EditCreator() {
  const creatorId = useParams().creatorId;

  return (
    <div>
      <p>{creatorId}</p>
    </div>
  );
}
