'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { brand, products } from '../../lib/brand';
import { useCart } from '../../lib/cart';
export default function SpecialPage(){
  const v=brand.variants; const [base,setBase]=useState(products[0]);
  const [size,setSize]=useState(v.sizes[1]); const [crust,setCrust]=useState(v.crusts[0]);
  const [cheese,setCheese]=useState(v.cheeses[0]); const [tops,setTops]=useState(['pep']);
  const { add }=useCart(); const router=useRouter();
  const topPrice=tops.reduce((n,id)=>n+(v.toppings.find(t=>t.id===id)?.price||0),0);
  const price=base.price+size.delta+topPrice;
  function build(){ add({ id:base.id, name:base.name+' (Custom)', price, img:base.img, qty:1, lineKey:`build-${base.id}-${size.id}-${tops.join('.')}`, meta:`${size.label} · ${crust} · ${cheese} · ${tops.length} toppings` }); router.push('/cart'); }
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <header className="special-chrome reveal">
        <p className="font-black uppercase text-xs tracking-widest mb-2">Lane station · custom fire</p>
        <h1 className="font-display text-4xl md:text-6xl">Pizza builder</h1>
        <p className="mt-2 font-bold uppercase text-sm">Full customize — sizes, crusts, cheeses, toppings.</p>
      </header>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="card-soft overflow-hidden"><img src={base.img} alt="" className="aspect-square w-full object-cover" /></div>
        <div className="space-y-5">
          <div><p className="font-semibold mb-2">Base pie</p><div className="flex flex-wrap gap-2">{products.map(p=><button key={p.id} onClick={()=>setBase(p)} className="chip" style={{outline:base.id===p.id?'2px solid var(--brand)':undefined}}>{p.name}</button>)}</div></div>
          <div><p className="font-semibold mb-2">Size</p><div className="flex flex-wrap gap-2">{v.sizes.map(s=><button key={s.id} onClick={()=>setSize(s)} className="chip" style={{background:size.id===s.id?'var(--brand)':undefined,color:size.id===s.id?'#fff':undefined}}>{s.label}</button>)}</div></div>
          <div><p className="font-semibold mb-2">Crust</p><div className="flex flex-wrap gap-2">{v.crusts.map(s=><button key={s} onClick={()=>setCrust(s)} className="chip" style={{outline:crust===s?'2px solid var(--brand)':undefined}}>{s}</button>)}</div></div>
          <div><p className="font-semibold mb-2">Cheese</p><div className="flex flex-wrap gap-2">{v.cheeses.map(s=><button key={s} onClick={()=>setCheese(s)} className="chip" style={{outline:cheese===s?'2px solid var(--brand)':undefined}}>{s}</button>)}</div></div>
          <div><p className="font-semibold mb-2">Toppings</p><div className="flex flex-wrap gap-2">{v.toppings.map(t=>{ const on=tops.includes(t.id); return <button key={t.id} onClick={()=>setTops(p=>on?p.filter(x=>x!==t.id):[...p,t.id])} className="chip" style={{background:on?'var(--accent)':undefined}}>{t.name}</button>; })}</div></div>
          <div className="flex items-center justify-between pt-2"><p className="font-display text-3xl" style={{color:'var(--brand)'}}>${price.toFixed(2)}</p><button className="btn-brand" onClick={build}>Add custom pie</button></div>
        </div>
      </div>
    </div>
  );
}
