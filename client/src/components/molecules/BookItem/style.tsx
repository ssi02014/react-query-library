import styled from "styled-components";

export const StyledBookItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #464646;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  & + & {
    margin-top: 15px;
  }
`;
