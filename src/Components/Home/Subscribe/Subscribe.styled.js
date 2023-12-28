import styled from "styled-components";

export const StyledSubscribeWrapper = styled.div`
  background-color: #212529;
  padding: 3rem;

  @media screen and (max-width: 600px){
    padding: 2rem;
    text-align: center;
  }
`;

export const StyledText = styled.p`
  color: gray;
  font-size: 16px;
`;

export const StyledTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
`;

export const StyledInput = styled.input`
  border-radius: 0%;
`;

export const StyledButton = styled.button`
  border-radius: 0%;
  padding: 10px 20px;
  background-color: #72aec8;
  border: none;

  @media screen and (max-width: 600px){
    padding: 6px 10px;
  }
`;
