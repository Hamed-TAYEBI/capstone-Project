import styled from "styled-components";
import Link from "next/link";
export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #b4ccb9;
  color: #f76d57;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  border: none;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;
