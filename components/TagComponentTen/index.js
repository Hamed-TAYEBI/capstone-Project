import { useState } from "react";
import Image from "next/image";
export default function TagComponentTen() {
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
            src="/assets/umbrella.png"
            width="25"
            height="25"
            alt="morning-clock"
          />
        ) : (
          <Image
            src="/assets/umbrella2.png"
            width="25"
            height="25"
            alt="nighttime"
          />
        )}
      </button>
    </>
  );
}
