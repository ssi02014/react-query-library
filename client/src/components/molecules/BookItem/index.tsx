import React from "react";

interface Props {
  title: string;
  author: string;
}
const BookItem = ({ title, author }: Props) => {
  return (
    <li>
      {title} - {author}
    </li>
  );
};

export default BookItem;
