import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import FloatingInquiry from './components/FloatingInquiry';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const ExperiencesPage = lazy(() => import('./pages/ExperiencesPage'));
const StoryPage = lazy(() => import('./pages/StoryPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const Reservations = lazy(() => import('./pages/Reservations'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

export default function App() {
  useLenis();

  return (
    <div className="relative">
      <Loader />
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />

      <main>
        <Suspense fallback={<div className="h-screen w-full bg-[var(--color-ivory)]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>

      <FloatingInquiry />
      <Footer />
    </div>
  );
}
