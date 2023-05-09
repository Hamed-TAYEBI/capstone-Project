import { useRouter } from "next/router";
import ActivityForm from "@/components/ActivityForm";

export default function Form({ addActivity }) {
  const router = useRouter();

  function handleSubmit(data) {
    addActivity(data);
    router.push("/");
  }

  return (
    <>
      <h1 id="favourite-activity">Add activity</h1>
      <ActivityForm onSubmit={handleSubmit}></ActivityForm>
    </>
  );
}
