import { useState } from "react";
import Image from "next/image";
import { StyledTagButton } from "../StyledTagButton/StyledTagButton";

export default function Tag({ tag, foundTag }) {
  const [opacity, setOpacity] = useState(foundTag ? 1 : 0.3);

  function handleClick(event) {
    setOpacity(opacity === 1 ? 0.3 : 1);
  }

  return (
    <StyledTagButton onClick={handleClick} type="button" key={tag.id}>
      <Image
        src={tag.src}
        width="25"
        height="25"
        alt={tag.title}
        style={{ opacity }}
      />
    </StyledTagButton>
  );
}
