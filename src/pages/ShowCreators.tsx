import CreatorCard from "../components/CreatorCard";
import { CreatorList } from "../types";
import styles from "../styles/ShowCreators.module.css";
import { useState, useEffect } from "react";
import { supabase } from "../client";

export default function ShowCreators() {
  const [creators, setCreators] = useState<CreatorList["creators"]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCreators();
  }, []);

  const getCreators = async () => {
    try {
      setLoading(true);
      const { data } = await supabase.from("creators").select();
      if (data) {
        setCreators(data as CreatorList["creators"]);
      }
      setLoading(false);
    } catch (e) {
      throw e;
    }
  };
  return (
    <div className={`${styles.pageContainer}`}>
      {loading ? (
        <div style={{ color: "#5e3023" }}>LOADING!!!!!!</div>
      ) : creators.length != 0 ? (
        creators.map((creator, index) => (
          <CreatorCard {...creator} key={index} />
        ))
      ) : (
        <p style={{ color: "#5e3023" }}>There are no creators yet!</p>
      )}
    </div>
  );
}
