import Link from "next/link";
import Image from "next/image";

export default function StyledReturn() {
  return (
    <Link href="/">
      <Image
        src={"/price.png"}
        width="35"
        height="35"
        alt="return bottom"
        style={{ position: "fixed", top: "150px" }}
        aria-label="Return to home page"
      />
    </Link>
  );
}
