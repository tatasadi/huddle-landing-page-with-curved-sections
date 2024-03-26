import React from "react"
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"
import { poppins } from "../../fonts"

const CTASection: React.FC = () => {
  return (
    <section className="mb-[11rem] mt-10 flex flex-col items-center gap-10 text-center lg:mt-[8.45rem]">
      <h3
        className={cn(
          "text-2xl font-bold leading-[2.25rem] lg:pl-8 lg:text-[2.5rem] lg:leading-[3.75rem]",
          poppins.className,
        )}
      >
        Ready To Build Your Community?
      </h3>
      <Button className="lg:ml-4 lg:px-[6.25rem]">Get Started For Free</Button>
    </section>
  )
}

export default CTASection
