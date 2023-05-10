import { StyledContainer } from "@/components/StyledContainer/StyledContainer";
import StyledReturn from "@/components/StyledReturn/StyledReturn";

export default function TitleCards({ activities }) {
  return (
    <>
      <StyledReturn />
      <h1> Your Titles</h1>
      {activities.map((activity) => {
        return (
          <>
            <StyledContainer>
              <p>{activity.title}</p>
            </StyledContainer>
          </>
        );
      })}
    </>
  );
}
