import styled from "styled-components";
import Link from "next/link";
export const StyledLink = styled(Link)`
  a {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
    border: none;
  }

  a:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;
