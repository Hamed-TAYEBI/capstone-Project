import { useState } from "react";
import Image from "next/image";

export default function Tag({ tag, foundTag, editTag, activityId, tagId }) {
  const [opacity, setOpacity] = useState(foundTag ? 1 : 0.5);

  function handleClick(event) {
    editTag(activityId, tagId);
    setOpacity(opacity === 1 ? 0.5 : 1);
    console.log("edittag and activityid", activityId, tagId);
  }
  return (
    <button onClick={handleClick} key={tag.id}>
      <Image
        src={tag.src}
        width="25"
        height="25"
        alt={tag.title}
        style={{ margin: "3px", opacity }}
      />
    </button>
  );
}
