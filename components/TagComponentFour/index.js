import { useState } from "react";
import Image from "next/image";
export default function TagComponentFour() {
  const [tagShape, setTagShape] = useState(false);
  function handleclick(event) {
    event.preventDefault();
    setTagShape(!tagShape);
  }
  return (
    <>
      <button onClick={handleclick}>
        {tagShape ? (
          <Image
            src="/assets/indoor2.png"
            width="25"
            height="25"
            alt="nature"
          />
        ) : (
          <Image src="/assets/indoor.png" width="25" height="25" alt="house" />
        )}
      </button>
    </>
  );
}
