import { supabase } from "../client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Creator from "../types";
import CreatorForm from "../components/CreatorForm";

export default function AddCreator() {
  const [user, setUser] = useState<Creator>({
    name: "",
    url: "",
    description: "",
    imageURL: undefined,
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await supabase.from("creators").insert(user);
    navigate("/");
  };

  return (
    <div>
      <CreatorForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        user={user}
      />
    </div>
  );
}
