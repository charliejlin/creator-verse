import CreatorCard from "../components/CreatorCard";
import Creator from "../types";

export default function ShowCreators(creators: Creator[]) {
  return (
    <div>
      {creators.map((creator, index) => (
        <CreatorCard {...creator} key={index} />
      ))}
    </div>
  );
}
