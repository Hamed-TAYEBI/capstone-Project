import { v4 as uuid4 } from "uuid";
import { tagList } from "@/lib/db/db";
import Tag from "../Tag";
export default function TagList({ tags, editTag, activityId, tagId }) {
  return (
    <ul>
      {tagList.map((tag) => {
        const foundTag = tags?.find((id) => tag.id === id);
        return (
          <Tag
            key={uuid4()}
            activityId={activityId}
            tagId={tagId}
            editTag={editTag}
            tag={tag}
            foundTag={foundTag}
          />
        );
      })}
    </ul>
  );
}
/// line 11 added with Bill.
