import Creator from "../types";

interface CreatorForm {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  user: Creator;
}

export default function CreatorForm({
  handleChange,
  handleSubmit,
  user,
}: CreatorForm) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" onChange={handleChange} value={user.name}></input>
        </label>
        <label>
          Social Media URL:
          <input name="url" onChange={handleChange} value={user.url}></input>
        </label>
        <label>
          Description
          <input
            name="description"
            onChange={handleChange}
            value={user.description}
          ></input>
        </label>
        <label>
          Image Link
          <input
            name="imageURL"
            onChange={handleChange}
            value={user.imageURL}
          ></input>
        </label>
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
}
