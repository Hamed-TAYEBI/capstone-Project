import Image from "next/image";
import Link from "next/link";
import TagComponentOne from "@/components/TagComponentOne";
import TagComponentFive from "@/components/TagComponentFive";
import TagComponentFour from "@/components/TagComponentFour";
import TagComponentSix from "@/components/TagComponentSix";
import TagComponentThree from "@/components/TagComponentThree";
import TagComponentTwo from "@/components/TagComponentTwo";
import TagComponentSeven from "@/components/TagComponentSeven";
import TagComponentEight from "@/components/TagComponentEight";
import TagComponentNine from "@/components/TagComponentNine";
import TagComponentTen from "@/components/TagComponentTen";
import TagComponentEleven from "@/components/TagComponentEleven";
import TagComponentTwelve from "@/components/TagComponentTwelve";
import TagComponentThirteen from "@/components/TagComponentThirteen";
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

              <li>
                {element.tags}
                <TagComponentOne />
                <TagComponentTwo />
                <TagComponentThree />
                <TagComponentFour />
                <TagComponentFive />
                <TagComponentSix />
                <TagComponentSeven />
                <TagComponentEight />
                <TagComponentNine />
                <TagComponentTen />
                <TagComponentEleven />
                <TagComponentTwelve />
                <TagComponentThirteen />
              </li>

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
