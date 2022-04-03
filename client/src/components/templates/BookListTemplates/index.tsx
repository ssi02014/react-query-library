import React from "react";
import { useQuery } from "react-query";
import { requestGetAllBooks } from "../../../api/book";
import { IBookListResponse } from "../../../interfaces/book";
import BookItemList from "../../organisms/BookItemList";
import { Container } from "./style";

const BookListTemplates = () => {
  const { data, error, isLoading, isError } = useQuery<
    IBookListResponse[],
    Error
  >("book", requestGetAllBooks);

  if (isLoading) return <span>로딩중입니다</span>;
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return <Container>{data && <BookItemList data={data} />}</Container>;
};

export default BookListTemplates;
