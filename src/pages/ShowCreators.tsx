import CreatorCard from "../components/CreatorCard";
import { CreatorList } from "../types";

export default function ShowCreators({ creators }: CreatorList) {
  return (
    <div>
      {/* {creators.length != 0 ? (
        creators.map((creator, index) => (
          <CreatorCard {...creator} key={index} />
        ))
      ) : (
        <p>There are no creators yet!</p>
      )} */}
      {creators.map((creator, index) => (
        <CreatorCard {...creator} key={index} />
      ))}
    </div>
  );
}
