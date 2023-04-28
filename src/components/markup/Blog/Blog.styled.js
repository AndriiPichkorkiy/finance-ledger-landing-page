import styled from "styled-components";

export const BlogSection = styled.section`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textColorMain};
  background-color: ${(props) => props.theme.bgBlogSection};
`;

export const BlogPosterWrapper = styled.div`
  width: 320px;
  height: 247px;
`;

export const BlogContent = styled.div`
  padding: 48px 20px 58px 20px;
`;
