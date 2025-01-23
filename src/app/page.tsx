import BasicContainer from "@/components/basic-container";
import Image from "next/image";

export default function Home() {
  return (
    <BasicContainer>
      <a className="text-2xl">About Me</a>
      <a className="text-justify">
        <figure className="float-left mr-4 mb-2 w-[100px]">
          <Image
            src={"/images/misc/me.jpg"}
            alt="Me"
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
          />
          <figcaption className="text-center text-sm mt-1">
            Figure 1: A picture of me
          </figcaption>
        </figure>
        Hello, my name is Andreas Kvernhaug. I made this homepage to maybe trick
        some hiring manager to hire me as a front-end developer or something
        similar. Not sure yet what else the page will be used for yet. Figure 1
        shows a picture of me.
      </a>
      <br />
      <a className="text-2xl">Why the Seasonal Theme?</a>
      <a className="text-justify">
      <figure className="float-left mr-4 mb-2 w-[100px]">
          <Image
            src={"/images/misc/maple.jpg"}
            alt="Me"
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
          />
          <figcaption className="text-center text-sm mt-1">
            Figure 2: This is a maple leaf
          </figcaption>
        </figure>
        I wanted my homepage to have a seasonal theme, because I like seasons.
        Seasons are great! It brings some novelty to everyday life. I like
        novelty. My greatest nightmare is living in a place thet doesn't have
        seasons. Unless it's like Mars or something. I guess that would be cool. 
        Figure 2 shows a maple leaf. It can change color depending on the season.
      </a>
    </BasicContainer>
  );
}
