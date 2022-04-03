import styled from "styled-components";

export const StyledImage = styled.img<{ width: number }>`
  width: ${({ width }) => width}px;
`;
