import styled from "styled-components";

export const LoaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderWrapper = styled.div`
  width: 25%;
  height: 25%;

  & > img {
    object-fit: none;
  }
`;
