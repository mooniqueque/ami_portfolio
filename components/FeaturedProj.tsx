'use client';

import { useState } from 'react';
import Image from 'next/image';

type ProjectCard = {
  title: string;
  desc: string;
  image?: string;
  link?: string;
};

export default function FeaturedProjectShowcase() {
  const [current, setCurrent] = useState(0);

  const cards: ProjectCard[] = [
    {
      title: 'Limosé',
      desc: 'A cozy digital concept focused on soft visuals and clean UI.',
      image: '/Pic1.png',
      link: 'https://www.figma.com/proto/D5SPOdMpUyT9APhuESEAv9/Limose-DESKTOP-FILE?node-id=1-889&t=i4PxgjKjA629gRBV-1',
    },
    {
      title: 'Petto',
      desc: 'Petto — a pet care app prototype for tracking care and connecting with services.',
      image: '/Pic2.png',
      link: 'https://www.figma.com/proto/H7iDL7SSQQNm6Jz2Fx1Mx2/Petto?node-id=3-610&p=f&t=uFhxITeBlYfZBSyw-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A493&show-proto-sidebar=1',
    },
    {
      title: 'Petbook',
      desc: 'Petbook is a friendly social app for pet owners to share updates and track routines.',
      image: '/Pic3.png',
    },
    {
      title: 'SPOTato',
      desc: 'SPOTato — a location-based social tool (prototype).',
      image: '/Pic4.png',
      link: 'https://www.figma.com/proto/XXgMY8gqT5LqJ94lLPaTXo/SPOTato?node-id=4-3&p=f&t=if6YaVBe2JLM9Vzi-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A3',
    },
  ];

  const next = () => setCurrent((current + 1) % cards.length);
  const prev = () => setCurrent((current - 1 + cards.length) % cards.length);

  const activeCard = cards[current];

  const CardContent = (
    <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl border-2 border-slate-300 bg-white shadow-xl transition-transform duration-300 hover:scale-[1.01]">
      {activeCard.image ? (
        <Image
          src={activeCard.image}
          alt={activeCard.title}
          fill
          className="object-cover"
          priority={current === 0}
        />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-pink-200 via-pink-100 to-white" />
      )}

      <div className="absolute bottom-0 w-full bg-white/85 p-6 backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-slate-900">{activeCard.title}</h3>
        <p className="text-base text-slate-600">{activeCard.desc}</p>
      </div>
    </div>
  );

  return (
    <div className="relative mx-auto mt-6 w-full max-w-5xl">
      {activeCard.link ? (
        <a
          href={activeCard.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${activeCard.title} in a new tab`}
          className="block cursor-pointer"
        >
          {CardContent}
        </a>
      ) : (
        CardContent
      )}

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={prev}
          className="rounded-lg border-2 border-slate-900 bg-white px-4 py-2 font-semibold hover:bg-slate-50"
        >
          ← Previous
        </button>

        <div className="flex gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 w-3 rounded-full transition ${i === current ? 'bg-slate-900' : 'bg-slate-300'}`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="rounded-lg border-2 border-slate-900 bg-amber-200 px-4 py-2 font-semibold hover:bg-amber-300"
        >
          Next →
        </button>
      </div>
    </div>
  );
}