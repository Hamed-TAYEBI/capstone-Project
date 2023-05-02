import { useState } from "react";
import Image from "next/image";
export default function TagComponentThree() {
  const [tagShape, setTagShape] = useState(false);
  function handleclick(event) {
    event.preventDefault();
    setTagShape(!tagShape);
  }
  return (
    <>
      <button class="tag" onClick={handleclick}>
        {tagShape ? (
          <Image src="/assets/audios.png" width="25" height="25" alt="book" />
        ) : (
          <Image src="/assets/audios2.png" width="25" height="25" alt="empty" />
        )}
      </button>
    </>
  );
}
