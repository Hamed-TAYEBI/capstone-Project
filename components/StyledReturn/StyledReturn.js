import Link from "next/link";
import Image from "next/image";

export default function StyledReturn() {
  return (
    <>
      <Link href="/">
        <Image
          src={"/return.png"}
          width="35"
          height="35"
          alt="price bottom"
          style={{ position: "fixed", top: "5px", right: "5px" }}
        ></Image>
      </Link>
    </>
  );
}
