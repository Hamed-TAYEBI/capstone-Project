import { tagList } from "@/lib/db/db";
import Tag from "../Tag";
export default function TagList({ tags }) {
  return (
    <ul>
      {tagList.map((tag) => {
        const foundTag = tags?.find((id) => tag.id == id);
        return (
          <Tag key={Math.random().toString()} tag={tag} foundTag={foundTag} />
        );
      })}
    </ul>
  );
}
