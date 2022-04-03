import React from "react";
import { StyledButton } from "./style";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  color?: "primary";
  shape?: "rect" | "round";
  ml?: string;
  mr?: string;
  mt?: string;
  mb?: string;
}
const Button = ({
  children,
  color = "primary",
  shape = "round",
  ml = "0",
  mr = "0",
  mt = "0",
  mb = "0",
  onClick,
}: Props) => {
  return (
    <StyledButton
      ml={ml}
      mr={mr}
      mt={mt}
      mb={mb}
      shape={shape}
      color={color}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
