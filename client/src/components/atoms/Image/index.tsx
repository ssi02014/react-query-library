import React from "react";
import { StyledImage } from "./style";

interface Props {
  src: string;
  alt: string;
  width: number;
}

const Image = ({ src, alt, width }: Props) => {
  return <StyledImage src={src} alt={alt} width={width} />;
};

export default Image;
