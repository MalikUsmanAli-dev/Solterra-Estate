import Hero from '../components/Hero';
import StorySection from '../components/StorySection';
import Experiences from '../components/Experiences';
import Statistics from '../components/Statistics';
import Destinations from '../components/Destinations';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <StorySection />
      <Experiences />
      <Statistics />
      <Destinations />
      <Gallery />
      <Testimonials />
      <CTA />
    </>
  );
}
