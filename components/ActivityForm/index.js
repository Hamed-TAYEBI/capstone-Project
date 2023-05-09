export default function ActivityForm({ onSubmit, activity = {} }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmit(data);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="title">My title: </label>
      <input
        required
        id="title"
        type="text"
        name="title"
        defaultValue={activity.title}
        placeholder="...my title for this activity"
        style={{ width: "300px", height: "75px" }}
      />
      <label htmlFor="note">My note: </label>
      <input
        id="note"
        type="text"
        name="note"
        defaultValue={activity.note}
        placeholder="...your note"
        style={{ width: "300px", height: "200px" }}
      />

      <label htmlFor="url">URL: </label>
      <input
        id="url"
        type="url"
        name="url"
        defaultValue={activity.url}
        placeholder="...add a URL"
      />
      <label htmlFor="imageURL">image URL </label>
      <input
        id="imageURL"
        type="url"
        name="imageURL"
        placeholder="..url"
        defaultValue={activity.imageURL}
      />
      <label htmlFor="date">Date: </label>
      <input id="date" type="date" name="date" defaultValue={activity.date} />
      <button
        type="submit"
        className="form__submit-button"
        defaultValue={activity.date}
      >
        Submit
      </button>
    </form>
  );
}
