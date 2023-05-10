import TagList from "@/components/TagList/TagList";
import styled from "styled-components";
import Link from "next/link";
import { data } from "@/lib/db/db";
import { useRouter } from "next/router";
import { StyledLink } from "@/components/StyledLink/StyledLink";
import StyledReturn from "@/components/StyledReturn/StyledReturn";
import { StyledContainer } from "@/components/StyledContainer/StyledContainer";
import { StyledDeleteButton } from "@/components/StyledDeleteButton/StyledDeleteButton";

export default function SingleActivity({ editTag, removeActivity }) {
  const router = useRouter();
  const id = router.query.id;
  const activity = data.find((activity) => activity.id == id);

  if (!activity) {
    return <p>not found.....</p>;
  }
  return (
    <>
      <StyledReturn key={activity.id}>
        <StyledContainer>
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

            {activity.imageURL && <Img src={activity.imageURL} />}
            <li>{activity.date}</li>
            <li>
              {activity.url && (
                <Link href={activity.url} target="_blank">
                  click for link
                </Link>
              )}
            </li>

            <StyledDeleteButton onClick={() => removeActivity(id)}>
              !! Delete !!
            </StyledDeleteButton>
            <StyledLink href={`/activity/edit/${id}`}>edit</StyledLink>
          </ul>
        </StyledContainer>
      </StyledReturn>
    </>
  );
}

const Img = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "sample image",
}))`
  width: 300px;
  height: 150px;
`;
