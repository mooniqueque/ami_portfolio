import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/30 backdrop-blur-md border-b border-white/40 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <a
          href="https://www.linkedin.com/in/andreanne-monique-gorres-99633b2b3/?skipRedirect=true"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
          aria-label="Andreanne Monique Gorres on LinkedIn"
        >
          <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/80 border border-white/60">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-pink-500" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM0 8h4.96V24H0V8zm7.5 0H12v2.2h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.6V24h-4.96v-7.2c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H7.5V8z" />
            </svg>
          </span>
          <span className="font-medium text-lg md:text-xl text-slate-900">Andreanne</span>
        </a>
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-base md:text-xl font-medium text-slate-900 hover:text-pink-500 transition">
            Home
          </Link>

          <Link href="/about" className="text-base md:text-xl font-medium text-slate-900 hover:text-pink-500 transition">
            About Me
          </Link>

          <a
            href="https://drive.google.com/file/d/1oCvLJUgpO1CFNhpLw1YpgxYxt7JIshY-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-xl font-medium text-slate-900 hover:text-pink-500 transition"
            aria-label="Open resume (opens in new tab)"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}