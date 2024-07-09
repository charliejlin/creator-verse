import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Creator from "../types";
import { supabase } from "../client";
import CreatorForm from "../components/CreatorForm";
import Header from "../components/Header";
import styles from "../styles/FormPages.module.css";

export default function EditCreator() {
  const creatorId = Number(useParams().creatorId);
  const [user, setUser] = useState<Creator>({
    name: "",
    url: "",
    description: "",
    imageURL: undefined,
  });

  useEffect(() => {
    fetchCreator();
  }, []);

  const navigate = useNavigate();

  const fetchCreator = async () => {
    const { data } = await supabase
      .from("creators")
      .select("*")
      .eq("id", creatorId)
      .single();
    if (data) {
      setUser(data as unknown as Creator);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await supabase
      .from("creators")
      .update({
        name: user.name,
        url: user.url,
        description: user.description,
        imageURL: user.imageURL,
      })
      .eq("id", creatorId);
    navigate("/");
  };

  const handleDelete = async (creatorId: Number) => {
    await supabase.from("creators").delete().eq("id", creatorId);
    navigate("/");
  };

  return (
    <div className={`${styles.container}`}>
      <Header />
      <CreatorForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={user}
      />
      <button onClick={() => handleDelete(creatorId)}>Delete</button>
    </div>
  );
}
