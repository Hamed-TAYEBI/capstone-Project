import ActivityCards from "@/components/ActivityCards";

import Link from "next/link";

export default function HomePage({ activities }) {
  return (
    <div>
      <h1>Activities Page</h1>
      <Link href="/forms">
        <button>add another activity</button>
      </Link>

      <ActivityCards activities={activities}></ActivityCards>
    </div>
  );
}
