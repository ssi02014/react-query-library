import React from "react";
import { IBookListResponse } from "../../../interfaces/book";
import BookItem from "../../molecules/BookItem";
import { ListContainer } from "./style";

interface Props {
  data: IBookListResponse[];
}
const BookItemList = ({ data }: Props) => {
  return (
    <ListContainer>
      {data.map(({ id, author, title }) => (
        <BookItem key={id} id={id} author={author} title={title} />
      ))}
    </ListContainer>
  );
};

export default BookItemList;
