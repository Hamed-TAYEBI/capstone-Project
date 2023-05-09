import styled from "styled-components";
import TagList from "./TagList/TagList";
import { StyledLink } from "./StyledLink";

export default function ActivityCards({ activities, editTag }) {
  return (
    <>
      {activities.map((activity) => {
        return (
          <div className="container" key={activity.id}>
            <ul>
              <li>
                Title:
                {activity.title}
              </li>

              <li>Note: {activity.note}</li>

              <li>
                <TagList
                  tags={activity.tags}
                  activityId={activity.id}
                  tagId={activity.tags}
                  editTag={editTag}
                />
              </li>

              {activity.imageURL && <TagImg src={activity.imageURL} />}
              <li>Date: {activity.date}</li>

              <li>
                {activity.url && (
                  <StyledLink href={activity.url} target="_blank">
                    url
                  </StyledLink>
                )}
              </li>

              <li>
                <StyledLink href={`/activity/${activity.id}`}>read</StyledLink>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

const TagImg = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "sample image",
}))`
  width: 300px;
  height: 150px;
`;
