import TagList from "./TagList/TagList";
import { StyledLink } from "./StyledLink/StyledLink";
import { StyledContainer } from "./StyledContainer/StyledContainer";
import { StyledDate } from "./StyledDate/StyledDate";
import { TagImage } from "./StyledTagImage/StyledTagImage";
export default function ActivityCards({ activities }) {
  return (
    <>
      {activities.map((activity) => {
        return (
          <StyledContainer key={activity.id}>
            <h3>{activity.title}</h3>

            <p> {activity.note}</p>

            <TagList tags={activity.tags} />

            {activity.imageURL && <TagImage src={activity.imageURL} />}
            <StyledDate>{activity.date}</StyledDate>

            {activity.url && (
              <StyledLink href={activity.url} target="_blank">
                related url
              </StyledLink>
            )}
            <StyledLink href={`/activity/${activity.id}`}>read</StyledLink>
          </StyledContainer>
        );
      })}
    </>
  );
}
