import { tagList } from "@/lib/db/db";
import Tag from "../Tag";
export default function TagList({ tags, editTag, activityId, tagId }) {
  return (
    <ul>
      {tagList.map((tag) => {
        const foundTag = tags?.find((id) => tag.id === id);
        return (
          <Tag
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
