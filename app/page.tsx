import HeroSection from "./components/sections/hero-section"
import StaticsSection from "./components/sections/statics-section"

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[90rem]">
      <HeroSection />
      <StaticsSection />
    </main>
  )
}
