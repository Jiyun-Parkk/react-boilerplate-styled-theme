import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "pages";
import { Layout } from "components";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
