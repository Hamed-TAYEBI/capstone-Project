import Link from "next/link";
import Image from "next/image";

export default function StyledReturn() {
  return (
    <>
      <Link href="/">
        <Image
          position="fixed"
          src={"/return.png"}
          width="50"
          height="50"
          alt="return bottom"
          top="10"
          left="10"
        ></Image>
      </Link>
    </>
  );
}
