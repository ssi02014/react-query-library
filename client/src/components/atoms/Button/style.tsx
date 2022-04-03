import styled, { css } from "styled-components";

interface IButton {
  color: string;
  shape: string;
  ml: string;
  mr: string;
  mt: string;
  mb: string;
}

export const StyledButton = styled.button<IButton>`
  background-color: #fff;
  padding: 10px;
  border-radius: ${({ shape }) => (shape === "rect" ? "" : "4")}px;
  margin: ${({ ml, mr, mt, mb }) => `${mt}px ${mr}px ${mb}px ${ml}px`};
  ${({ color, theme }) => {
    if (color === "primary") {
      return css`
        background-color: ${theme.colors.primary};
        color: #fff;
      `;
    }
  }};
`;
