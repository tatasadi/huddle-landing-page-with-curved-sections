import React from "react"
import Stat from "../stat"
import iconCommunities from "@/public/icon-communities.svg"
import iconMessages from "@/public/icon-messages.svg"

const StaticsSection: React.FC = () => {
  return (
    <section className="mt-[7.5rem] flex flex-col items-center gap-[5.66rem] lg:flex-row lg:justify-evenly lg:gap-0">
      <Stat icon={iconCommunities} title="1.4k+" text="Communities Formed" />
      <Stat icon={iconMessages} title="2.7m+" text="Messages Sent" />
    </section>
  )
}

export default StaticsSection
