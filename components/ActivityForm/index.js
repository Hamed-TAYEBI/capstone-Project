import { StyledContainer } from "../StyledContainer/StyledContainer";
import { StyledTitelInput } from "../StyledTitleInput/StyledTitelInput";
import { StyledNoteInput } from "../StyledNoteInput/StyledNoteInput";
import { StyledSubmitButton } from "../StyledSubmitButton/StyledSubmitButton";

export default function ActivityForm({ onSubmit, activity = {} }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmit(data);
  }

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">title</label>
        <StyledTitelInput
          required
          id="title"
          type="text"
          name="title"
          defaultValue={activity.title}
          placeholder="...my title for this activity"
        ></StyledTitelInput>

        <label htmlFor="note">notes</label>
        <StyledNoteInput
          id="note"
          className="text-input"
          type="text"
          name="note"
          defaultValue={activity.note}
          placeholder="...your note"
        ></StyledNoteInput>

        <label htmlFor="url">activity's web url</label>
        <input
          id="url"
          type="url"
          name="url"
          defaultValue={activity.url}
          placeholder="...add a URL"
        />
        <label htmlFor="imageURL">image's url</label>
        <input
          className="image"
          id="imageURL"
          type="url"
          name="imageURL"
          placeholder="image url"
          defaultValue={activity.imageURL}
        />
        <label htmlFor="date">date</label>
        <input id="date" type="date" name="date" defaultValue={activity.date} />
        <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
      </form>
    </StyledContainer>
  );
}
