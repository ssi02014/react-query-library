import styled from "styled-components";

export const Form = styled.form`
  width: 600px;
  padding: 20px;
`;
export const InputContainer = styled.div`
  & + & {
    margin-top: 10px;
  }
`;
