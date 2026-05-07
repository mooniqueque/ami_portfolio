import FeaturedProjectShowcase from "@/components/FeaturedProj";

// ...existing code...
export default function HeroSection() {
  return (
    <section className="px-6 md:px-10 pt-20 md:pt-24 pb-8 bg-pink-100 text-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Intro Block: single column on mobile, left content on desktop */}
        <div className="flex flex-col items-center text-center space-y-4">
          <p className="text-sm md:text-base font-semibold tracking-widest text-slate-600">
            NICE TO MEET YOU
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
            Hi, I&apos;m <span className="text-pink-500">Andreanne.</span>
          </h1>
          <p className="text-base md:text-xl leading-relaxed text-slate-700 max-w-4xl">
            I&apos;m a web designer and developer focused on intuitive, visually engaging digital experiences. <br/> I also work with UI/UX in Figma and video editing.
          </p>
        </div>

        <h2 className="text-4xl md:text-2xl font-medium tracking-wide text-start px-35 mt-20">
          Featured Projects
        </h2>

        {/* Featured Block: centered and wider */}
        <div className=" mb-8 flex justify-center">
          <div className="w-full max-w-4xl">
            <FeaturedProjectShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
