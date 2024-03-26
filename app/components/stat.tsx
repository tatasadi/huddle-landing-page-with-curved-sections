import React from "react"
import Image from "next/image"

interface IProps {
  icon: string
  title: string
  text: string
}

const Stat: React.FC<IProps> = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col items-start">
      <Image src={icon} alt={title} className="h-9 w-auto lg:h-[2.25rem]" />
      <h3 className="text-[3.8rem] font-bold leading-[5.71rem] lg:text-[6rem] lg:leading-[9rem]">
        {title}
      </h3>
      <p className="self-center text-[0.95238rem] leading-[1.42856rem] text-dark-gray lg:text-2xl lg:leading-9">
        {text}
      </p>
    </div>
  )
}

export default Stat
