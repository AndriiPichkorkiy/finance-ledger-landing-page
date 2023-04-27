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
  margin: 31px;
`;

export const GalleryList = styled.ul``;

export const GalleryItem = styled.li`
  margin-top: 8px;
  height: 178px;
`;
