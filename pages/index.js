import ActivityCards from "@/components/ActivityCards";

import Link from "next/link";
import Image from "next/image";

export default function HomePage({ activities, editTag }) {
  return (
    <div>
      <h1>Activities Page</h1>
      <Link style={{ display: "flex", justifyContent: "center" }} href="/forms">
        <button>
          <Image
            src="/assets/add.png"
            width="25"
            height="25"
            alt="book"
            margin="auto"
          />
        </button>
      </Link>

      <ActivityCards activities={activities} editTag={editTag}></ActivityCards>
    </div>
  );
}
