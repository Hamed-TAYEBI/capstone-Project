import TagList from "@/components/TagList/TagList";
import styled from "styled-components";
import { data } from "@/lib/db/db";
import { useRouter } from "next/router";
import { StyledLink } from "@/components/StyledLink/StyledLink";
import StyledReturn from "@/components/StyledReturn/StyledReturn";
import { StyledContainer } from "@/components/StyledContainer/StyledContainer";
import { StyledDeleteButton } from "@/components/StyledDeleteButton/StyledDeleteButton";
import { Wrapper } from "@/components/Wrapper/Wrapper";
import { StyledDate } from "@/components/StyledDate/StyledDate";
import { TagImage } from "@/components/StyledTagImage/StyledTagImage";

export default function SingleActivity({ editTag, removeActivity }) {
  const router = useRouter();
  const id = router.query.id;
  const activity = data.find((activity) => activity.id === id);

  if (!activity) {
    return <p>not found.....</p>;
  }
  return (
    <>
      <Wrapper>
        <StyledContainer key={activity.id}>
          <StyledReturn key={activity.id} />

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
              click for link
            </StyledLink>
          )}

          <StyledLink href={`/activity/edit/${id}`}>edit</StyledLink>
          <StyledDeleteButton onClick={() => removeActivity(id)}>
            ! Delete !
          </StyledDeleteButton>
        </StyledContainer>
      </Wrapper>
    </>
  );
}
