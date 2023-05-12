import { StyledContainer } from "@/components/StyledContainer/StyledContainer";
import StyledReturn from "@/components/StyledReturn/StyledReturn";
import Link from "next/link";
import { Wrapper } from "@/components/Wrapper/Wrapper";
export default function TitleCards({ activities }) {
  return (
    <>
      <StyledReturn />

      <h1>Title Cards</h1>
      {activities.map((activity) => {
        return (
          <>
            <Wrapper>
              <Link href={`/activity/${activity.id}`}>
                <StyledContainer>
                  <p>{activity.title}</p>
                </StyledContainer>
              </Link>
            </Wrapper>
          </>
        );
      })}
    </>
  );
}
