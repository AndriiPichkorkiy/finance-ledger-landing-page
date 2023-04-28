import styled from "styled-components";

export const CasesSection = styled.section`
  padding: 56px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textColorSecond};
  background-color: ${(props) => props.theme.bgSection};
`;

export const CasesContent = styled.div`
  padding: 79px 20px;
`;

export const CasesGalleryWrapper = styled.div`
  margin-top: 31px;
`;

export const GalleryList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(100px, 178px);
  grid-row-gap: 8px;
  width: 100%;
  margin: 0;
`;

export const GalleryItem = styled.li`
  /* height: 178px; */
`;
