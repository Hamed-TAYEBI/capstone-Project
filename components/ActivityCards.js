import Image from "next/image";
import Link from "next/link";
export default function ActivityCards({ activities }) {
  return (
    <>
      {activities.map((element) => {
        return (
          <div className="container" key={element.id}>
            <ul style={{ listStyleType: "none" }}>
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

              {element.imageURL && (
                <Image
                  src={element.imageURL}
                  alt="sample image"
                  width="300"
                  height="150"
                />
              )}
              <li>Date: {element.date}</li>
              <li>
                {element.url && (
                  <Link href={element.url} target="_blank">
                    your URL
                  </Link>
                )}
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}
