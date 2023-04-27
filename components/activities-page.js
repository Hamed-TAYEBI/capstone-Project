import { data } from "@/lib/db/db";
import Image from "next/image";
export default function ActivityCards() {
  const ActivitiesPage = data.map((element) => {
    return (
      <div className="container">
        <ul key={element.id}>
          <li
            style={{
              fontWeight: "bold",
              color: "green",
            }}
          >
            Title:
            {element.title}
          </li>

          <li>Note: {element.note}</li>
          <li>You tagged: {element.tags}</li>

          <Image
            src={element.imageURL}
            alt="sample image"
            width="300"
            height="150"
          />
          <li>Date: {element.date}</li>
          <li>
            <a href={element.url} target="_blank">
              your URL
            </a>
          </li>
        </ul>
      </div>
    );
  });
  return <div>{ActivitiesPage}</div>;
}
