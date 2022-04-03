import styled from "styled-components";

export const NavBarContainer = styled.header`
  width: 100%;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      color: #d1d0d0;
    }
  }

  & > div {
    display: flex;
    align-items: center;
  }

  img {
    width: 20px;
    margin-right: 4px;
  }
`;
