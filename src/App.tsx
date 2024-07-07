import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import { CreatorList } from "./types";
import { supabase } from "./client";
import "./App.css";
import AddCreator from "./pages/AddCreator";

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
      <Link to={"/add"}>
        <button>Add Creator</button>
      </Link>
      <ShowCreators creators={creators} />
    </div>
  );
}

export default App;
