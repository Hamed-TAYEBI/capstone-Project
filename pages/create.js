import { useRouter } from "next/router";
import ActivityForm from "@/components/ActivityForm";
import StyledReturn from "@/components/StyledReturn/StyledReturn";
export default function Form({ addActivity }) {
  const router = useRouter();

  function handleSubmit(data) {
    addActivity(data);
    router.push("/");
  }

  return (
    <>
      <StyledReturn />

      <h1>Add activity</h1>
      <ActivityForm onSubmit={handleSubmit}></ActivityForm>
    </>
  );
}
