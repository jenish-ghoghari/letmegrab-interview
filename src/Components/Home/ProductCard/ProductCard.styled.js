import styled from "styled-components";

export const StyledImage = styled.div`
  width: 100%;
  height: 300px;

  img {
    height: 100%;
    object-fit: fill;
  }

  @media screen and (max-width: 992px) {
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const StyledButton = styled.div`
  border: none;
  background-color: none;
`;

export const StyledPrice = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: orange;
`;

export const StyledTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const StyledCard = styled.div`
  border-radius: 0px;
  box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.2);
`;
