import { StyledContainer } from "@/components/StyledContainer/StyledContainer";
import StyledReturn from "@/components/StyledReturn/StyledReturn";
import Link from "next/link";
import styled from "styled-components";

export default function TitleCards({ activities }) {
  return (
    <>
      <StyledReturn />
      <h1> Your Titles</h1>
      {activities.map((activity) => {
        return (
          <>
            <Link href={`/activity/${activity.id}`}>
              <StyledContainer>
                <p>{activity.image}</p>
                {activity.imageURL && <Img src={activity.imageURL} />}
              </StyledContainer>
            </Link>
          </>
        );
      })}
    </>
  );
}
const Img = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "sample image",
}))`
  width: 300px;
  height: 150px;
`;
