import styled from "styled-components";
import TagList from "./TagList/TagList";
import { StyledLink } from "./StyledLink/StyledLink";
import { StyledContainer } from "./StyledContainer/StyledContainer";
import { StyledDate } from "./StyledDate/StyledDate";
import { TagImage } from "./StyledTagImage/StyledTagImage";
export default function ActivityCards({ activities, editTag }) {
  return (
    <>
      {activities.map((activity) => {
        return (
          <StyledContainer key={activity.id}>
            <h3>
              Title:
              {activity.title}
            </h3>

            <p>Note: {activity.note}</p>

            <TagList
              tags={activity.tags}
              activityId={activity.id}
              tagId={activity.tags}
              editTag={editTag}
            />

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
