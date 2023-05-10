import { StyledContainer } from "@/components/StyledContainer/StyledContainer";
import StyledReturn from "@/components/StyledReturn/StyledReturn";
import Link from "next/link";

export default function NotesCards({ activities }) {
  return (
    <>
      <StyledReturn />
      <h1> Your Titles</h1>
      {activities.map((activity) => {
        return (
          <>
            <Link href={`/activity/${activity.id}`}>
              <StyledContainer>
                <p>{activity.note}</p>
              </StyledContainer>
            </Link>
          </>
        );
      })}
    </>
  );
}
