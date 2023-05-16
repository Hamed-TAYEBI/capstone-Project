import styled from "styled-components";

export const StyledGallery = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "sample image",
}))`
  width: 300px;
  height: auto;
  border-radius: 7px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  object-position: center;
  object-fit: cover;

  @media (max-width: 768px) {
    margin: 80px;
  }

  @media (max-width: 480px) {
    margin: 40px;
  }
`;
