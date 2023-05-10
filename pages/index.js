import ActivityCards from "@/components/ActivityCards";

import { HeaderLinks } from "@/components/HeaderLinks/HeaderLinks";

export default function HomePage({ activities, editTag }) {
  return (
    <div>
      <HeaderLinks href="/create">add</HeaderLinks>

      <ActivityCards activities={activities} editTag={editTag}></ActivityCards>
    </div>
  );
}
