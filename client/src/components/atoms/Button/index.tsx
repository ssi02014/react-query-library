import React from "react";
import { StyledButton } from "./style";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
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
  fullWidth = false,
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
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
