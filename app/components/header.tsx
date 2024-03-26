import logo from "@/public/logo.svg"
import Image from "next/image"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="flex w-full max-w-[90rem] items-center justify-between p-6 lg:pt-[4.94rem] xl:px-20">
      <Image
        src={logo}
        alt="logo"
        className="h-4 w-24 lg:h-[2.37rem] lg:w-[15rem]"
      />
      <Button variant="outline">Try It Free</Button>
    </header>
  )
}

export default Header
