import FeaturedCourses from '@/components/FeaturedCourses';
import HeroSection from '@/components/HeroSection'
import { InfiniteMovingCardsDemo } from '@/components/MovingCards';
import { StickyScrollReveal } from '@/components/StickyScrollReveal';

export default function Home() {
  return (
      <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
          <HeroSection />
          <FeaturedCourses />
          <StickyScrollReveal />
          <InfiniteMovingCardsDemo />
      </main>
  );
}
