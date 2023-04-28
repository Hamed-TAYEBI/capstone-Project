import { use, useState } from "react";
import Link from "next/link";
import { StyledLink } from "@/components/StyledLink";
export default function Form({ addActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    addActivity(data);

    event.target.note.focus();
    event.target.reset();
  }

  return (
    <>
      <h1 id="favourite-activity">Add activity</h1>

      <form
        className="form"
        aria-labelledby="favourite-activity"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title">My title: </label>
        <input
          required
          id="title"
          type="text"
          name="title"
          placeholder="...my title for this activity"
          style={{ width: "300px", height: "75px" }}
        />

        <label htmlFor="note">My note: </label>
        <input
          id="note"
          type="text"
          name="note"
          placeholder="...your note"
          style={{ width: "300px", height: "200px" }}
        />

        <label htmlFor="url">URL: </label>
        <input id="url" type="url" name="url" placeholder="...add a URL" />

        <label htmlFor="imageURL">image URL </label>
        <input id="imageURL" type="url" name="imageURL" placeholder="..url" />

        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
        <button>
          <Link href="/">see your activity here</Link>
        </button>
      </form>
    </>
  );
}
