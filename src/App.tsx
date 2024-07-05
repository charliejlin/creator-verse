import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { useState, useEffect } from "react";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";
import Creator from "./types";
import { supabase } from "./client";
import "./App.css";

function App() {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getCreators();
  }, []);

  const getCreators = async () => {
    try {
      const { data, error } = await supabase.from("creators").select();
      if (error) {
        throw new Error(String(error));
      } else {
        setCreators(data);
      }
    } catch (e) {
      throw e;
    }
  };

  let routes = useRoutes([
    {
      path: "/",
      element: <ShowCreators {...creators} />,
      children: [
        {
          path: "view/:id",
          element: <ViewCreator {...creators} />,
        },
        {
          path: "edit/:id",
          element: <EditCreator />,
        },
        {
          path: "add/:id",
          element: <AddCreator />,
        },
      ],
    },
  ]);
  return routes;
}

export default App;
