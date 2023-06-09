import StyledReturn from "@/components/StyledReturn/StyledReturn";
import Link from "next/link";
import { StyledGallery } from "@/components/StyledGallery/StyledGallery";
export default function ImageCards({ activities }) {
  return (
    <>
      <StyledReturn />
      <h1>Gallery</h1>
      {activities.map((activity) => {
        return (
          <Link key={activity.id} href={`/activity/${activity.id}`}>
            <p>{activity.image}</p>
            {activity.imageURL && (
              <StyledGallery src={activity.imageURL} key={activity.id} />
            )}
          </Link>
        );
      })}
    </>
  );
}
