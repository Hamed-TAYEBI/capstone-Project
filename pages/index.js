import ActivityCards from "@/components/ActivityCards";
import StyledReturn from "@/components/StyledReturn/StyledReturn";
import { StyledHeaderLinks } from "@/components/StyledHeaderLinks/StyledHeaderLinks";
import { Wrapper } from "@/components/Wrapper/Wrapper";
import { StyledHeader } from "@/components/StyledHeader/StyledHeader";

export default function HomePage({ activities, editTag }) {
  return (
    <>
      <StyledHeader>
        <StyledReturn />
        <StyledHeaderLinks href="/create">+ Add </StyledHeaderLinks>

        <StyledHeaderLinks href="/activity/entries/notes">
          Notes
        </StyledHeaderLinks>
        <StyledHeaderLinks href="/activity/entries/titles">
          Titles
        </StyledHeaderLinks>
        <StyledHeaderLinks href="/activity/entries/images">
          Gallery
        </StyledHeaderLinks>
      </StyledHeader>
      <Wrapper>
        <ActivityCards
          activities={activities}
          editTag={editTag}
        ></ActivityCards>
      </Wrapper>
    </>
  );
}
