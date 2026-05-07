import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <HeroSection />
      </div>
    </main>
  );
}