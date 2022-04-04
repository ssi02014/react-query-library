import React from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { requestGetBook, requestUpdateBook } from "../../../api/book";
import { IBookListResponse } from "../../../interfaces/book";
import BookForm from "../../organisms/BookForm";
import { Container } from "./style";

const UpdateBookTemplate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading, isError, isFetching } = useQuery<
    IBookListResponse,
    Error
  >(["book", id], () => requestGetBook(id));

  const { mutateAsync, isLoading: isMutating } = useMutation(requestUpdateBook);

  const onFormSubmit = async (data: IBookListResponse) => {
    await mutateAsync({ ...data, id: id as string });
    navigate("/");
  };

  if (isLoading || isFetching) {
    return (
      <Container>
        <span>로딩중입니다</span>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <span>Error: {error.message}</span>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Update Book</h1>
      <BookForm
        defaultValues={data}
        isLoading={isMutating}
        onFormSubmit={onFormSubmit}
      />
    </Container>
  );
};

export default UpdateBookTemplate;
