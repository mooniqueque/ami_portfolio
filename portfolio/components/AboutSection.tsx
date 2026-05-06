export default function AboutSection() {
  return (
    <section className="px-6 md:px-10 py-16 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left: Story */}
          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-slate-700">
              I am an IT student and a Front-End Developer Enthusiast. My main focus for now is in website development, but I am currently exploring in the tech world so my knowledge won't be limited in web development.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-slate-700">
              ⋆˚౨ৎ ⋆.˚
            </p>
          </div>

          {/* Right: Two columns (Hobbies + Perks) */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">𝜗ৎ My Hobbies</h3>
              <ul className="space-y-2 text-slate-700">
                <li>💻 Exploring in front-end development through hands-on practice.</li>
                <li>☁️ Learning and experimenting with web development concepts.</li>
                <li>🎮 Playing games and getting inspired by game mechanics and design.</li>
                <li>📓 Studying and practicing coding lessons on Codedex.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">☾. My Unique Perks</h3>
              <ul className="space-y-2 text-slate-700">
                <li>✨ I enjoy problem-solving and debugging.</li>
                <li>🚀 I am a fast learner and curious explorer of new tools.</li>
                <li>👥 I work well independently and in teams.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}