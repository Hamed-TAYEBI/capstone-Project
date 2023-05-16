import { StyledContainer } from "@/components/StyledContainer/StyledContainer";
import StyledReturn from "@/components/StyledReturn/StyledReturn";
import { Wrapper } from "@/components/Wrapper/Wrapper";
import Link from "next/link";

export default function NotesCards({ activities }) {
  return (
    <>
      <StyledReturn />
      <h1>Note Cards</h1>
      {activities.map((activity) => {
        return (
          <Wrapper key={activity.id}>
            <StyledContainer>
              <Link href={`/activity/${activity.id}`}>
                <p>{activity.note}</p>
              </Link>
            </StyledContainer>
          </Wrapper>
        );
      })}
    </>
  );
}
