import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";
import { CiLink } from "react-icons/ci";
import Header from "../components/Header";
import Creator from "../types";
import styles from "../styles/ViewCreator.module.css";

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
    <div className={`${styles.container}`}>
      <Header />
      <div className={`${styles.info}`}>
        <div className={`${styles.imageContainer}`}>
          <img src={user.imageURL}></img>
        </div>
        <div className={`${styles.text}`}>
          <h2>{user.name}</h2>
          <Link to={user.url} target="_blank">
            <CiLink />
          </Link>
          <p>{user.description}</p>
        </div>
      </div>
    </div>
  );
}
