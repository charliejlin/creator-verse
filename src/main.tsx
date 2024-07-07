import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import EditCreator from "./pages/EditCreator.tsx";
import ViewCreator from "./pages/ViewCreator.tsx";
import AddCreator from "./pages/AddCreator.tsx";
import NotFound from "./pages/NotFound.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="add" element={<AddCreator />} />
        <Route path="edit">
          <Route path=":creatorId" element={<EditCreator />} />
        </Route>
        <Route path="view">
          <Route path=":creatorId" element={<ViewCreator />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
