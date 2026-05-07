export default function AboutSection() {
  return (
    <section className="px-6 md:px-10 py-16 text-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-slate-700">
              I am an IT student and Front-End Developer enthusiast focused on website development and creative digital experiences.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-slate-700">
              I am also exploring other areas in tech to keep learning and growing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">𝜗ৎ My Hobbies</h3>
              <ul className="space-y-2 text-slate-700">
                <li>💻 Front-end development practice</li>
                <li>☁️ Learning web development concepts</li>
                <li>🎮 Playing games and studying design ideas</li>
                <li>📓 Coding exercises on Codedex</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">☾. My Unique Perks</h3>
              <ul className="space-y-2 text-slate-700">
                <li>✨ Problem-solving and debugging</li>
                <li>🚀 Fast learner and curious about new tools</li>
                <li>👥 Works well independently and in teams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}