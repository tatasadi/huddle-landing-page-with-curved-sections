import React from "react"
import { cn } from "../lib/utils"
import Image, { StaticImageData } from "next/image"
import { poppins } from "../fonts"

interface IPorps {
  title: string
  description: string
  imageSrc: StaticImageData
  imageRight?: boolean
  className?: string
}

const ContentItem: React.FC<IPorps> = ({
  title,
  description,
  imageSrc,
  imageRight = false,
  className = "",
}) => (
  <div
    className={cn(
      "flex flex-col items-center gap-[4.64rem] px-6 py-20 lg:flex-row lg:gap-[7.61rem] lg:px-[7.5rem]",
      className,
    )}
  >
    <Image
      src={imageSrc}
      alt={title}
      className={cn(
        imageRight ? "lg:order-2" : "",
        "w-[16rem] lg:w-[32.32638rem]",
      )}
    />
    <div
      className={cn(
        "flex flex-col items-center text-center lg:items-start lg:text-left",
        imageRight ? "lg:order-1" : "",
      )}
    >
      <h2
        className={cn(
          poppins.className,
          "text-xl font-bold leading-[1.875rem] lg:text-[2.5rem] lg:leading-[3.75rem]",
        )}
      >
        {title}
      </h2>
      <p className="mt-4 lg:mt-[1.62rem]">{description}</p>
    </div>
  </div>
)

export default ContentItem
