import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { useState, useEffect } from "react";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";
import Creator, { CreatorList } from "./types";
import { supabase } from "./client";
import "./App.css";

function App() {
  const [creators, setCreators] = useState<CreatorList["creators"]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getCreators();
  }, []);

  const getCreators = async () => {
    try {
      const { data } = await supabase.from("creators").select();
      console.log(data);
      if (data) {
        setCreators(data as CreatorList["creators"]);
      }
    } catch (e) {
      throw e;
    }
  };

  let routes = useRoutes([
    {
      path: "/",
      element: <ShowCreators creators={creators} />,
      children: [
        {
          path: "view/:id",
          element: <ViewCreator {...creators} />,
        },
        {
          path: "edit/:id",
          element: <EditCreator {...creators} />,
        },
        {
          path: "add/:id",
          element: <AddCreator {...creators} />,
        },
      ],
    },
  ]);

  return <div>{routes}</div>;
}

export default App;
