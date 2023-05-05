import Image from "next/image";
import Link from "next/link";
import TagList from "./TagList/TagList";

export default function ActivityCards({ activities, editTag }) {
  return (
    <>
      {activities.map((activity) => {
        return (
          <div className="container" key={activity.id}>
            <ul style={{ listStyleType: "none" }}>
              <li
                style={{
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                Title:
                {activity.title}
              </li>

              <li>Note: {activity.note}</li>

              <li>
                <TagList
                  activityId={activity.id}
                  tagId={activity.tags}
                  editTag={editTag}
                />
              </li>

              {activity.imageURL && (
                <Image
                  src={activity.imageURL}
                  alt="sample image"
                  width="300"
                  height="150"
                />
              )}
              <li>Date: {activity.date}</li>
              <li>
                {activity.url && (
                  <Link href={activity.url} target="_blank">
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
