import React from "react";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import { StyledBookItem } from "./style";
import { useMutation, useQueryClient } from "react-query";
import { requestRemoveBook } from "../../../api/book";
import { IBookListResponse } from "../../../interfaces/book";

interface Props {
  id: string;
  title: string;
  author: string;
}
const BookItem = ({ id, title, author }: Props) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(requestRemoveBook);

  const onRemove = async () => {
    await mutateAsync(id);
    // 1. setQueryData로 최신화
    queryClient.setQueryData("books", (oldData: any) => {
      if (oldData) {
        return oldData.filter((item: IBookListResponse) => item.id !== id);
      }
    });

    // 2. invalidateQueries로 최신화
    // queryClient.invalidateQueries("books")
  };

  return (
    <StyledBookItem>
      <Link to={`/update/${id}`}>{title}</Link>
      <div>
        <span>{author}</span>
        <Button color="primary" ml="20" onClick={onRemove}>
          {isLoading ? "삭제중" : "삭제"}
        </Button>
      </div>
    </StyledBookItem>
  );
};

export default BookItem;
