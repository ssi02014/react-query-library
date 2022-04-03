import React from "react";
import { Route, Routes } from "react-router-dom";
import BookList from "./BookList";
import CreateBook from "./CreateBook";
import UpdateBook from "./UpdateBook";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/create" element={<CreateBook />} />
      <Route path="/update" element={<UpdateBook />} />
    </Routes>
  );
};

export default Router;
