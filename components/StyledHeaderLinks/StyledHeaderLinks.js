import styled from "styled-components";
import Link from "next/link";
export const StyledHeaderLinks = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 5px 5px;
  border-radius: 5px;
  background-color: #b4ccb9;
  color: #f76d57;
  text-align: center;
  line-height: 1.4;
  margin: auto;

  border: solid #506c7f;
  height: 50px;
  width: 70px;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;
