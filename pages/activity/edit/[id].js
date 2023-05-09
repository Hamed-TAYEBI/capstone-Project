import ActivityForm from "@/components/ActivityForm";
import { data } from "@/lib/db/db";
import { useRouter } from "next/router";

export default function EditActivity({ editActivity }) {
  const router = useRouter();
  const id = router.query.id;
  const activity = data.find((activity) => activity.id == Number(id));
  function handleSubmit(data) {
    editActivity(id, data);
  }

  if (!activity) {
    return <div>not found.....</div>;
  }
  return (
    <>
      <h1>EDIT ACTIVITY</h1>
      <ActivityForm onSubmit={handleSubmit} activity={activity}></ActivityForm>
    </>
  );
}
