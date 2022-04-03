import React from "react";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import { StyledBookItem } from "./style";

interface Props {
  id: string;
  title: string;
  author: string;
}
const BookItem = ({ id, title, author }: Props) => {
  return (
    <StyledBookItem>
      <Link to={`/update/${id}`}>{title}</Link>
      <div>
        <span>{author}</span>
        <Button color="primary" ml="20" onClick={() => {}}>
          Remove
        </Button>
      </div>
    </StyledBookItem>
  );
};

export default BookItem;
