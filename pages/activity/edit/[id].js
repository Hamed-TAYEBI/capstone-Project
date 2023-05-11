import ActivityForm from "@/components/ActivityForm";
import { data } from "@/lib/db/db";
import { useRouter } from "next/router";
import StyledReturn from "@/components/StyledReturn/StyledReturn";
import { Wrapper } from "@/components/Wrapper/Wrapper";
import { StyledContainer } from "@/components/StyledContainer/StyledContainer";

export default function EditActivity({ editActivity }) {
  const router = useRouter();
  const id = router.query.id;
  const activity = data.find((activity) => activity.id == Number(id));
  function handleSubmit(data) {
    editActivity(id, data);
  }

  if (!activity) {
    return <p>not found.....</p>;
  }
  return (
    <>
      <StyledReturn />
      <h1>EDIT ACTIVITY</h1>
      <Wrapper>
        <StyledContainer>
          <ActivityForm
            onSubmit={handleSubmit}
            activity={activity}
          ></ActivityForm>
        </StyledContainer>
      </Wrapper>
    </>
  );
}
