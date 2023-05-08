import TagList from "@/components/TagList/TagList";
import styled from "styled-components";
import Link from "next/link";
import { data } from "@/lib/db/db";
import { useRouter } from "next/router";

export default function SingleActivity({
  editTag,
  removeActivity,
  editActivity,
}) {
  const router = useRouter();
  const id = router.query.id;
  const activity = data.find((activity) => activity.id == id);
  if (!activity) {
    return <div>not found.....</div>;
  }
  return (
    <>
      <ul>
        <li>
          Title:
          {activity.title}
        </li>

        <li>Note: {activity.note}</li>

        <li>
          <TagList
            activityId={activity.id}
            tagId={activity.tags}
            editTag={editTag}
          />
        </li>

        {activity.imageURL && <TagImg src={activity.imageURL} />}
        <li>Date: {activity.date}</li>
        <li>
          {activity.url && (
            <Link href={activity.url} target="_blank">
              your URL
            </Link>
          )}
        </li>
        <button onClick={() => removeActivity(id)}> Delete </button>
      </ul>
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
