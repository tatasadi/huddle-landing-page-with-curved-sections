import { Button } from "../ui/button"
import Image from "next/image"
import screenMockups from "@/public/screen-mockups.svg"
import { poppins } from "../../fonts"

const HeroSection = () => {
  return (
    <section className="mt-[7.03rem] flex flex-col items-center px-10 text-center lg:ml-3 lg:mt-[12.75rem] lg:px-[12rem]">
      <h1 className={`heading-xl ${poppins.className}`}>
        Build The Community Your Fans Will Love
      </h1>
      <p className="paragraph-l mt-6 max-w-[37.5rem] lg:mt-[1.25rem]">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <Button className="mt-12 lg:mt-[3.06rem] lg:w-[25rem]">
        Get Started For Free
      </Button>
      <Image
        src={screenMockups}
        alt="screen mockups"
        className="mt-[6.5rem] lg:mt-[6.75rem]"
      />
    </section>
  )
}

export default HeroSection
