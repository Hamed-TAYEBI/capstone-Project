import ActivityCards from "@/components/ActivityCards";
import StyledReturn from "@/components/StyledReturn/StyledReturn";
import { StyledHeaderLinks } from "@/components/StyledHeaderLinks/StyledHeaderLinks";

export default function HomePage({ activities, editTag }) {
  return (
    <>
      <div className="header">
        <StyledReturn />
        <StyledHeaderLinks href="/activity/entries/notes">
          Notes
        </StyledHeaderLinks>
        <StyledHeaderLinks href="/activity/entries/titles">
          Titles
        </StyledHeaderLinks>
        <StyledHeaderLinks href="/activity/entries/images">
          Images
        </StyledHeaderLinks>
        <StyledHeaderLinks href="/create">ADD</StyledHeaderLinks>
      </div>
      <ActivityCards activities={activities} editTag={editTag}></ActivityCards>
    </>
  );
}
