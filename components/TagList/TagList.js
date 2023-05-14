import { v4 as uuid4 } from "uuid";
import { tagList } from "@/lib/db/db";
import Tag from "../Tag";
export default function TagList({ tags }) {
  return (
    <ul>
      {tagList.map((tag) => {
        const foundTag = tags?.find((id) => tag.id == id);
        return <Tag key={uuid4()} tag={tag} foundTag={foundTag} />;
      })}
    </ul>
  );
}
