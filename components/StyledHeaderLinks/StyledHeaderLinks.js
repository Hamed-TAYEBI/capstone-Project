import styled from "styled-components";
import Link from "next/link";
export const StyledHeaderLinks = styled(Link)`
  display: flex;
  justify-content: flex-start;
  padding: 5px 5px;
  border-radius: 5px;
  background-color: #b4ccb9;
  color: #f76d57;
  text-align: left;
  width: fit-content;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;
