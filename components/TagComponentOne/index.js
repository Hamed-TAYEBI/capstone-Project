import { useState } from "react";
import Image from "next/image";
export default function TagComponentOne() {
  const [tagShape, setTagShape] = useState(false);
  function handleclick(event) {
    event.preventDefault();
    setTagShape(!tagShape);
  }
  return (
    <>
      <button class="tag" onClick={handleclick}>
        {tagShape ? (
          <Image
            src="/assets/onscreen2.png"
            width="25"
            height="25"
            alt="book"
          />
        ) : (
          <Image
            src="/assets/onscreen.png"
            width="25"
            height="25"
            alt="phone"
          />
        )}
      </button>
    </>
  );
}
