import styled from "styled-components";
export const TagImage = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "sample image",
}))`
  width: 300px;
  height: 200px;
  border-radius: 7px;
  object-fit: cover;
  object-position: center;
`;
