import ActivityCards from "@/components/ActivityCards";
import StyledReturn from "@/components/StyledReturn/StyledReturn";
import { StyledHeaderLinks } from "@/components/StyledHeaderLinks/StyledHeaderLinks";

export default function HomePage({ activities, editTag }) {
  return (
    <>
      <div className="header">
        <StyledReturn />
        <StyledHeaderLinks href="/titles">Titles</StyledHeaderLinks>
        <StyledHeaderLinks href="/create">add</StyledHeaderLinks>
      </div>
      <ActivityCards activities={activities} editTag={editTag}></ActivityCards>
    </>
  );
}
