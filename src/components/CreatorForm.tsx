import Creator from "../types";
import styles from "../styles/CreatorForm.module.css";

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
    <div className={`${styles.container}`}>
      <form onSubmit={handleSubmit} className={`${styles.form}`}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={user.name}
            required
          ></input>
        </label>
        <label>
          Social Media URL:
          <input
            name="url"
            onChange={handleChange}
            value={user.url}
            required
          ></input>
        </label>
        <label>
          Description:
          <input
            name="description"
            onChange={handleChange}
            value={user.description}
            required
          ></input>
        </label>
        <label>
          Image Link:
          <input
            name="imageURL"
            onChange={handleChange}
            value={user.imageURL}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
