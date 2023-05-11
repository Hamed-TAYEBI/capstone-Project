import { StyledContainer } from "../StyledContainer/StyledContainer";
import { StyledTitelInput } from "../StyledTitleInput/StyledTitelInput";
import { StyledNoteInput } from "../StyledNoteInput/StyledNoteInput";
import { StyledSubmitButton } from "../StyledSubmitButton/StyledSubmitButton";
import { Wrapper } from "@/components/Wrapper/Wrapper";
import { StyledForm } from "../StyledForm/StyledForm";

export default function ActivityForm({ onSubmit, activity = {} }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmit(data);
  }

  return (
    <Wrapper>
      <StyledContainer>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="title">
            <p>title</p>
          </label>
          <StyledTitelInput
            required
            id="title"
            type="text"
            name="title"
            defaultValue={activity.title}
            placeholder="...my title for this activity"
          ></StyledTitelInput>

          <label htmlFor="note">
            <p>notes</p>
          </label>
          <StyledNoteInput
            id="note"
            className="text-input"
            type="text"
            name="note"
            defaultValue={activity.note}
            placeholder="...your note"
          ></StyledNoteInput>

          <label htmlFor="url">
            <p>web url</p>{" "}
          </label>
          <input
            id="url"
            type="url"
            name="url"
            defaultValue={activity.url}
            placeholder="...add a URL"
          />
          <label htmlFor="imageURL">
            <p>image url</p>
          </label>
          <input
            className="image"
            id="imageURL"
            type="url"
            name="imageURL"
            placeholder="image url"
            defaultValue={activity.imageURL}
          />
          <label htmlFor="date">
            <p>date</p>
          </label>
          <input
            id="date"
            type="date"
            name="date"
            defaultValue={activity.date}
          />
          <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
        </StyledForm>
      </StyledContainer>
    </Wrapper>
  );
}
