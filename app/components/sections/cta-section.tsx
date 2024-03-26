import React from "react"
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"
import { poppins } from "../../fonts"

const CTASection: React.FC = () => {
  return (
    <section className="mb-60 mt-10 flex flex-col items-center gap-10 text-center lg:mt-[8.45rem]">
      <h3 className={cn("heading-xl", poppins.className)}>
        Ready To Build Your Community?
      </h3>
      <Button>Get Started For Free</Button>
    </section>
  )
}

export default CTASection
