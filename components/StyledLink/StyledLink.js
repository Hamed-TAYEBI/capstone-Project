import styled from "styled-components";
import Link from "next/link";
export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 5px 5px;
  border-radius: 5px;
  background-color: #b4ccb9;
  color: #f76d57;
  text-align: center;
  line-height: 1.4;
  margin: auto;

  border: solid #45aab8;
  height: 30px;
  width: 100px;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;
