import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import Creator from "../types";

export default function ViewCreator() {
  const [user, setUser] = useState<Creator>({
    name: "",
    url: "",
    description: "",
    imageURL: undefined,
  });

  const creatorId = Number(useParams().creatorId);

  useEffect(() => {
    findUser(creatorId);
  }, []);
  const findUser = async (creatorId: Number) => {
    const { data, error } = await supabase
      .from("creators")
      .select("*")
      .eq("id", creatorId)
      .single();

    if (data) {
      setUser(data);
    } else {
      return error;
    }
  };

  return (
    <div>
      <img src={user.imageURL}></img>
      <p>{user.name}</p>
      <p>{user.url}</p>
      <p>{user.description}</p>
    </div>
  );
}
