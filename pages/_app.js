import GlobalStyle from "../styles";
import { data } from "@/lib/db/db";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [activities, setActivities] = useState(data);
  function addActivity(newActivity) {
    setActivities([{ ...newActivity, id: crypto.randomUUID() }, ...activities]);
  }
  function editTag(activityId, tagId) {}
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        editTag={editTag}
        addActivity={addActivity}
        activities={activities}
      />
    </>
  );
}
