import styled from "styled-components";

export const TeamSection = styled.section`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textColorSecond};
  background-color: ${(props) => props.theme.accentSecond};
  padding: 72px 20px 50px 20px;
`;

export const TeamImgWrapper = styled.div`
  width: auto;
  height: 71.81%;
`;

export const TeamContent = styled.div``;

export const TeamList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(280px, auto);
  grid-row-gap: 30px;
  width: 100%;
  margin: 0;
`;

export const TeamItem = styled.li`
  text-align: center;
`;

export const TeamName = styled.h3`
  margin: 16px 0px 8px 0;
`;
