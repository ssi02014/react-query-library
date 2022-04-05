import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { requestPostBook } from "../../../api/book";
import { IBookListResponse } from "../../../interfaces/book";
import BookForm from "../../organisms/BookForm";
import { Container } from "./style";

const CreateBookTemplate = () => {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation(requestPostBook);

  const onFormSubmit = async (data: IBookListResponse) => {
    await mutateAsync(data);
    navigate("/");
  };
  return (
    <Container>
      <h1>Create Book</h1>
      <BookForm isCreate isLoading={isLoading} onFormSubmit={onFormSubmit} />
    </Container>
  );
};

export default CreateBookTemplate;
