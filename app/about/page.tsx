import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <AboutSection />
      </div>
    </main>
  );
}