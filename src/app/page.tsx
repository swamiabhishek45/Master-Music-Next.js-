import FeaturedCourses from '@/components/FeaturedCourses';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection'
import { Instructors } from '@/components/Instructors';
import { InfiniteMovingCardsDemo } from '@/components/MovingCards';
import { StickyScrollReveal } from '@/components/StickyScrollReveal';
import { CardHoverEffectDemo } from '@/components/UpcomingWebinars';

export default function Home() {
  return (
      <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
          <HeroSection />
          <FeaturedCourses />
          <StickyScrollReveal />
          <InfiniteMovingCardsDemo />
          <CardHoverEffectDemo />
          <Instructors />
          <Footer />
      </main>
  );
}
