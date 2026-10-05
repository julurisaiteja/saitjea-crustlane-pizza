'use client';
import Link from 'next/link';
import { useState } from 'react';
import { brand } from '../lib/brand';
import { useCart } from '../lib/cart';
import AIAssistant from './AIAssistant';

export default function Shell({ children }) {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const nav = [
    { href: '/shop', label: brand.nav[0] },
    { href: '/special', label: brand.nav[1] },
    { href: '/shop?cat=Signature', label: brand.nav[2] },
    { href: '/#reviews', label: brand.nav[3] },
  ];

  return (
    <div data-diamond="batch-1" data-style={brand.styleMarker}>
      <a href="#main" className="skip-link">Skip to menu</a>
      <div className="offer-banner max-shell-banner">
        <span className="max-ticket-punch" aria-hidden />
        {brand.offer.label} · <strong>{brand.offer.code}</strong> — {brand.offer.detail}
        <span className="max-ticket-punch" aria-hidden />
      </div>
      <header className="max-shell-header">
        <div className="max-shell-inner">
          <Link href="/" className="max-shell-mark">
            <span className="max-shell-mark-sub">Est. fire</span>
            {brand.name}
          </Link>
          <nav className="max-shell-nav" aria-label="Primary">
            {nav.map((item) => (
              <Link key={item.href + item.label} href={item.href} className="max-shell-link">
                {item.label}
              </Link>
            ))}
            <Link href="/cart" className="max-shell-cart">
              Bag{count > 0 ? ` · ${count}` : ''}
            </Link>
          </nav>
          <button
            type="button"
            className="max-shell-burger md:hidden"
            aria-expanded={open}
            aria-controls="max-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
        {open && (
          <div id="max-mobile-nav" className="max-shell-drawer">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/cart" onClick={() => setOpen(false)}>
              Bag{count > 0 ? ` · ${count}` : ''}
            </Link>
          </div>
        )}
      </header>
      <main id="main">{children}</main>
      <footer className="max-shell-footer">
        <div className="max-shell-footer-grid">
          <div>
            <p className="max-shell-footer-brand">{brand.name}</p>
            <p className="mt-2 text-sm" style={{ color: '#111' }}>
              Blistered pies from a lane oven — half-and-half, spice meters, loyalty stamps.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                className="flex-1 px-3 py-2 text-sm outline-none"
                style={{ border: '3px solid #111', background: '#fff' }}
                placeholder="Email for pie drops"
                aria-label="Email for pie drops"
              />
              <button type="submit" className="btn-brand !py-2">
                Join
              </button>
            </form>
          </div>
          <div>
            <p className="font-black uppercase mb-2">Lane map</p>
            <div className="space-y-1 text-sm font-bold uppercase">
              <div><Link href="/shop">Full menu</Link></div>
              <div><Link href="/special">Pie builder</Link></div>
              <div><Link href="/checkout">Checkout</Link></div>
              <div><Link href="/#reviews">Heat checks</Link></div>
            </div>
          </div>
          <div>
            <p className="font-black uppercase mb-2">Kitchen notes</p>
            <div className="space-y-1 text-sm font-bold">
              <div>28–40 min delivery ETA</div>
              <div>Gluten-free crust on 12&quot;</div>
              <div>Loyalty: 8 pies → free knots</div>
            </div>
          </div>
        </div>
        <p className="max-shell-legal">Demo storefront · no real payments · {brand.name} pizza lane</p>
      </footer>
      <div className="sticky-cta md:hidden">
        <Link href="/shop" className="btn-brand !py-2 !px-4 text-sm">
          Menu
        </Link>
        <Link href="/special" className="btn-ghost !py-2 !px-4 text-sm">
          Build
        </Link>
      </div>
      <AIAssistant />
    </div>
  );
}
