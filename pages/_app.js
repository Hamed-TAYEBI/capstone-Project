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
    router.push("/");
  }
  function editActivity(id, data) {
    const updatedActivities = activities.map((activity) => {
      if (activity.id == Number(id)) {
        return { ...activity, ...data };
      } else return activity;
    });

    setActivities(updatedActivities);
    router.push(`/`);
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
        editActivity={editActivity}
      />
    </>
  );
}
