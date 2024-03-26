import { Poppins, Open_Sans } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] })
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export { poppins, openSans }
