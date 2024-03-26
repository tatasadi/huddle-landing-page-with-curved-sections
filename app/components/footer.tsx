import Image from "next/image"
import logo from "@/public/logo-white.svg"
import iconEmail from "@/public/icon-email.svg"
import iconPhone from "@/public/icon-phone.svg"
import { RiFacebookBoxFill } from "react-icons/ri"
import { FaInstagram } from "react-icons/fa6"
import { FaSquareTwitter } from "react-icons/fa6"
import { Button } from "./ui/button"

const Footer = () => {
  return (
    <footer className="w-full max-w-[90rem]">
      <div className="h-[7rem] w-full bg-[url('/bg-footer-top-mobile.svg')] bg-cover bg-no-repeat lg:h-[10rem] lg:bg-[url('/bg-footer-top-desktop.svg')]"></div>
      <div className="bg-very-dark-cyan flex flex-col px-7 pb-12 pt-20 text-white lg:flex-row lg:justify-between lg:pb-[6.44rem] lg:pl-[7.5rem] lg:pr-[6.75rem] lg:pt-[7.5rem]">
        <form className="flex flex-col items-start lg:order-2">
          <h3 className="text-xl font-bold uppercase leading-[1.875rem] lg:text-2xl lg:leading-9">
            Newsletter
          </h3>
          <p className="mt-4 max-w-[21.25rem] text-sm font-semibold leading-6">
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We’ll never send you spam or pass on your email address
          </p>
          <div className="flex w-full flex-col items-end gap-4 lg:mt-2 lg:flex-row lg:gap-10">
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-8 w-full rounded-[0.375rem] px-4 py-3 lg:w-[20rem]"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </form>
        <div className="mt-[6.5rem] lg:order-1 lg:mt-0">
          <div>
            <Image src={logo} alt="logo" className="fill-white" />
            <p className="mt-4 max-w-[21.25rem] text-sm font-semibold leading-6 lg:mt-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
            <div className="mt-10 flex items-end gap-4 lg:mt-[1.4rem] lg:gap-5">
              <Image src={iconPhone} alt="icon phone" />
              <span>Phone: +1-543-123-4567</span>
            </div>
            <div className="mt-4 flex items-end gap-4 lg:gap-5">
              <Image src={iconEmail} alt="icon email" />
              <span>example@huddle.com</span>
            </div>
          </div>
          <div>
            <div className="mt-12 flex gap-4 lg:mt-20 lg:gap-5">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <RiFacebookBoxFill className="text-4xl text-white" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-4xl text-white" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaSquareTwitter className="text-4xl text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
