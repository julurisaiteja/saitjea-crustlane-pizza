'use client';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { brand, products } from '../../lib/brand';
import { useCart } from '../../lib/cart';

export default function ShopPage() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const [sort, setSort] = useState('featured');
  const { toggleWish, wish } = useCart();
  useEffect(() => {
    try {
      const c = new URLSearchParams(window.location.search).get('cat');
      if (c) setCat(c);
    } catch {}
  }, []);
  const cats = ['All', ...Array.from(new Set(products.map((p) => p.cat)))];
  const list = useMemo(() => {
    let out = products.filter((p) => {
      const hay = (p.name + ' ' + p.blurb + ' ' + (p.tags || []).join(' ')).toLowerCase();
      return (cat === 'All' || p.cat === cat) && hay.includes(q.toLowerCase());
    });
    if (sort === 'price-asc') out = [...out].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') out = [...out].sort((a, b) => b.price - a.price);
    if (sort === 'rating') out = [...out].sort((a, b) => b.rating - a.rating);
    return out;
  }, [q, cat, sort]);

  return (
    <div className="max-menu-board">
      <header className="max-menu-head reveal">
        <p className="max-menu-kicker">Tonight&apos;s board · {brand.offer.code}</p>
        <h1 className="font-display text-5xl md:text-7xl uppercase leading-none">{brand.nav[0]}</h1>
        <p className="mt-2 font-black uppercase text-sm">Ticket stubs · spice meters · tap a pie</p>
      </header>

      <div className="max-menu-controls reveal reveal-delay-1">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search the board…"
          className="max-menu-input"
          aria-label="Search menu"
        />
        <div className="max-menu-cats" role="tablist" aria-label="Category">
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`max-menu-cat${cat === c ? ' is-on' : ''}`}
            >
              {c}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="max-menu-input"
          aria-label="Sort"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
          <option value="rating">Top rated</option>
        </select>
      </div>

      <div className="max-ticket-rail stagger">
        {list.map((p, i) => (
          <article key={p.id} className="max-ticket" style={{ '--i': i }}>
            <div className="max-ticket-stub">
              <span>#{String(i + 1).padStart(2, '0')}</span>
              <span>{p.cat}</span>
            </div>
            <Link href={`/product/${p.id}`} className="max-ticket-media">
              <img src={p.img} alt={p.name} />
            </Link>
            <div className="max-ticket-body">
              <div className="flex justify-between gap-2 items-start">
                <Link href={`/product/${p.id}`} className="font-black uppercase text-xl leading-tight">
                  {p.name}
                </Link>
                <button
                  type="button"
                  onClick={() => toggleWish(p.id)}
                  aria-label="Wishlist"
                  className="max-ticket-wish"
                >
                  {wish.includes(p.id) ? '♥' : '♡'}
                </button>
              </div>
              <p className="text-sm mt-1 font-medium">{p.blurb}</p>
              <div className="max-ticket-meta">
                <span className="font-black text-2xl">${p.price}</span>
                <span className="max-spice" aria-label={`Spice ${p.spice || 0}`}>
                  Heat {'▲'.repeat(p.spice || 0)}
                  {'△'.repeat(5 - (p.spice || 0))}
                </span>
                <span className="text-xs font-bold">★ {p.rating}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      {!list.length && <p className="mt-10 font-black uppercase">No matches — flip another ticket.</p>}
    </div>
  );
}
