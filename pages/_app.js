import GlobalStyle from "../styles";
import { data } from "@/lib/db/db";
import { useState } from "react";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [activities, setActivities] = useState(data);
  function addActivity(newActivity) {
    setActivities([{ ...newActivity, id: crypto.randomUUID() }, ...activities]);
  }

  function removeActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== Number(id)));
    console.log("delete this data and id num ", data, typeof id);
    router.push("/");
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
        removeActivity={removeActivity}
      />
    </>
  );
}
