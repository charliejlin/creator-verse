import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import { CreatorList } from "./types";
import { supabase } from "./client";
import "./App.css";

function App() {
  const [creators, setCreators] = useState<CreatorList["creators"]>([]);
  const [error, setError] = useState<string>("");
  const id = 0;

  useEffect(() => {
    getCreators();
  }, []);

  const getCreators = async () => {
    try {
      const { data } = await supabase.from("creators").select();
      if (data) {
        setCreators(data as CreatorList["creators"]);
      }
    } catch (e) {
      throw e;
    }
  };

  return (
    <div>
      <h1>THE CREATORVERSE</h1>
      <ShowCreators creators={creators} />
      <Link to={`/edit/${id}`}>TO EDIT</Link>
    </div>
  );
}

export default App;
