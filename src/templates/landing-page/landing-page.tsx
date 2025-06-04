import { FeatureSection, HeroSection, StorySection, SupportSection } from "./sections";

export function LandingPage() {
  return (
    <article className="flex flex-col gap-10 mb:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <StorySection />
    </article>
  )
}