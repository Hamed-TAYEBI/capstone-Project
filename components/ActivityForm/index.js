export default function ActivityForm({ onSubmit, activity = {} }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmit(data);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="title"></label>
      <input
        required
        id="title"
        type="text"
        name="title"
        defaultValue={activity.title}
        placeholder="...my title for this activity"
        style={{ width: "300px", height: "75px" }}
      />
      <label htmlFor="note"></label>
      <input
        id="note"
        className="text-input"
        type="text"
        name="note"
        defaultValue={activity.note}
        placeholder="...your note"
        style={{ width: "300px", height: "200px" }}
      />

      <label htmlFor="url"></label>
      <input
        id="url"
        type="url"
        name="url"
        defaultValue={activity.url}
        placeholder="...add a URL"
      />
      <label htmlFor="imageURL"></label>
      <input
        className="image"
        id="imageURL"
        type="url"
        name="imageURL"
        placeholder="image url"
        defaultValue={activity.imageURL}
      />
      <label htmlFor="date"></label>
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
