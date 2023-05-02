import { useState } from "react";
import Image from "next/image";
export default function TagComponentThirteen() {
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
            src="/assets/location.png"
            width="25"
            height="25"
            alt="morning-clock"
          />
        ) : (
          <Image
            src="/assets/location22.png"
            width="25"
            height="25"
            alt="nighttime"
          />
        )}
      </button>
    </>
  );
}
