'use client';
import Link from 'next/link';
import { brand, products } from '../lib/brand';
import { useEffect, useState } from 'react';

function Stars({ n }) {
  return (
    <span className="stars">
      {'★'.repeat(Math.round(n))}
      {'☆'.repeat(5 - Math.round(n))}
    </span>
  );
}

export default function HomePage() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((x) => x + 1), 2800);
    return () => clearInterval(t);
  }, []);
  const live =
    typeof brand.stats[0].value === 'number'
      ? brand.stats[0].value + (tick % 7)
      : brand.stats[0].value;

  const steps = [
    { n: '01', t: 'Pick a pie', d: 'Classics, spicy, white, or signature — open any ticket.' },
    { n: '02', t: 'Build loud', d: 'Size, crust, cheese, toppings, half-and-half in the builder.' },
    { n: '03', t: 'Fire & fly', d: 'Lane oven blister → bag → door in ~34 minutes.' },
  ];

  return (
    <>
      <section className="max-hero">
        <div className="max-hero-media">
          <video autoPlay muted loop playsInline poster={brand.poster}>
            <source src={brand.video} type="video/mp4" />
          </video>
        </div>
        <div className="max-hero-panel">
          <p className="max-brand">{brand.name}</p>
          <h1 className="mt-4 text-2xl md:text-4xl font-black uppercase" style={{ color: '#111' }}>
            {brand.tagline}
          </h1>
          <div className="max-stack">
            <div className="max-offer-card">
              {brand.offer.label}
              <br />
              <span style={{ fontSize: '1.4rem' }}>{brand.offer.code}</span>
            </div>
            <div className="max-offer-card" style={{ background: 'var(--brand)' }}>
              Delivery
              <br />
              ~34 min
            </div>
            <div className="max-offer-card" style={{ background: '#fff' }}>
              Spice meter
              <br />
              on every pie
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/shop" className="btn-brand">
              Order loud
            </Link>
            <Link href="/special" className="btn-ghost">
              Build a pie
            </Link>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          {[...products, ...products].map((p, i) => (
            <span key={p.id + i}>
              {p.name} · {brand.offer.code}
            </span>
          ))}
        </div>
      </div>

      <section className="max-process reveal">
        <p className="font-black uppercase text-sm mb-4">How the lane works</p>
        <div className="max-process-grid stagger">
          {steps.map((s) => (
            <div key={s.n} className="max-process-card">
              <p className="font-display text-5xl">{s.n}</p>
              <p className="font-black uppercase text-xl mt-2">{s.t}</p>
              <p className="mt-2 font-medium">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="film-strip max-film">
        {products.map((p) => (
          <Link key={p.id} href={`/product/${p.id}`} className="film-cell">
            <img src={p.img} alt={p.name} />
            <span>{p.name}</span>
          </Link>
        ))}
      </div>

      <div className="max-rail">
        {products.map((p) => (
          <Link key={p.id} href={`/product/${p.id}`}>
            <img src={p.img} alt={p.name} />
            <div className="p-3">
              <p className="font-black uppercase">{p.name}</p>
              <p className="font-black">${p.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <section className="loyalty-band max-loyalty reveal">
        <div>
          <p className="font-display text-5xl md:text-7xl uppercase leading-none">Lane loyalty</p>
          <p className="mt-2 font-black uppercase">8 pies stamped → free garlic knots + {brand.offer.code}</p>
        </div>
        <Link href="/shop" className="btn-brand">
          Start stamping
        </Link>
      </section>

      <section className="p-6 grid gap-4 md:grid-cols-3" style={{ background: '#fff', color: '#111' }}>
        {brand.stats.map((s, i) => (
          <div key={s.label} className="card-soft p-5 reveal" style={{ animationDelay: `${0.1 * i}s` }}>
            <p className="font-display text-5xl">{i === 0 ? live : s.value}</p>
            <p className="uppercase font-bold mt-2">{s.label}</p>
          </div>
        ))}
      </section>

      <section id="reviews" className="max-reviews">
        <p className="font-black uppercase mb-4">Heat checks from the neighborhood</p>
        <div className="max-reviews-grid stagger">
          {brand.reviews.map((r) => (
            <blockquote key={r.name} className="max-review-card">
              <Stars n={r.stars} />
              <p className="mt-3 font-bold text-lg">&ldquo;{r.text}&rdquo;</p>
              <footer className="mt-3 uppercase text-sm font-black">{r.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
