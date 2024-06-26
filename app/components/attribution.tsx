export default function Attribution() {
  return (
    <div className="bg-very-dark-cyan mt-auto flex w-full max-w-[90rem] flex-col items-center justify-center text-center text-sm text-white sm:flex-row sm:gap-1 lg:absolute lg:bottom-0">
      <div>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io"
          target="_blank"
          className="footer-link"
          rel="noreferrer noopener"
        >
          Frontend Mentor
        </a>
        ,{" "}
      </div>
      <div>
        Coded by{" "}
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/ehsan-tatasadi-2161a433"
          target="_blank"
          rel="noreferrer noopener"
        >
          Ehsan Tatasadi
        </a>
        ,{" "}
      </div>
      <div>
        <a
          className="footer-link"
          href="https://github.com/tatasadi/huddle-landing-page-with-curved-sections"
          target="_blank"
          rel="noreferrer noopener"
        >
          Source Code
        </a>
      </div>
    </div>
  )
}
