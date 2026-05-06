export default function HeroSection() {
  return (
    <section className="px-6 md:px-10 py-12 md:py-16 bg-pink-100 text-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Intro Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Left: Text */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-sm md:text-base font-semibold tracking-widest text-slate-600">NICE TO MEET YOU</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-pink-500">Andreanne.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-slate-700 max-w-lg">
              I'm a web designer and developer focused on intuitive, visually engaging digital experiences. I also work with UI/UX in Figma and video editing.
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="md:col-span-1 flex flex-col gap-4 justify-start">
            <button className="border-2 border-slate-900 rounded-lg px-6 py-3 bg-amber-200 hover:bg-amber-300 font-semibold text-slate-900 transition">
              My Work
            </button>
            <button className="border-2 border-slate-900 rounded-lg px-6 py-3 bg-white hover:bg-slate-50 font-semibold text-slate-900 transition">
              About Me
            </button>
          </div>
        </div>

        {/* Featured Block (placeholder for project preview) */}
        <div className="bg-white border-2 border-slate-300 rounded-lg p-8 min-h-64 flex items-center justify-center">
          <p className="text-slate-500">Featured project preview coming soon</p>
        </div>
      </div>
    </section>
  );
}