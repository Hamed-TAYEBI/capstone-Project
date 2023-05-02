import { useState } from "react";
import Image from "next/image";
export default function TagComponentFive() {
  const [tagShape, setTagShape] = useState(false);
  function handleclick(event) {
    event.preventDefault();
    setTagShape(!tagShape);
  }
  return (
    <>
      <button onClick={handleclick}>
        {tagShape ? (
          <Image src="/assets/sun.png" width="25" height="25" alt="sun" />
        ) : (
          <Image src="/assets/sun2.png" width="25" height="25" alt="umbrella" />
        )}
      </button>
    </>
  );
}
