import { useEffect, useState } from 'react'
import { products, licensing } from './data/products'
import { Icon } from './components/Icon'

const whatsapp = 'https://wa.me/923269204504?text=Hello%20Nexa%20Technologies%2C%20I%20would%20like%20to%20review%20your%20software%20products.'
const github = 'https://github.com/nexatechnologies07/nexa-product-demos'

function Logo() {
  return <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight" aria-label="Nexa Technologies home">
    <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-black text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,.15)]">NX</span>
    <span><span className="block text-[15px] text-white">Nexa Technologies</span><span className="block text-[10px] uppercase tracking-[.24em] text-slate-500">Software Products</span></span>
  </a>
}

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])
  const nav = [['Products', '#products'], ['Partnerships', '#licensing'], ['About', '#about'], ['Contact', '#contact']]
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#07111f]/80 backdrop-blur-xl">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
      <Logo />
      <nav className="hidden items-center gap-8 md:flex">{nav.map(([label, href]) => <a key={href} className="text-sm text-slate-400 transition hover:text-white" href={href}>{label}</a>)}<a className="button button-small" href={whatsapp} target="_blank" rel="noreferrer">Request demo <Icon name="arrow" size={16}/></a></nav>
      <button onClick={() => setOpen(!open)} className="rounded-xl border border-white/10 p-2.5 text-slate-200 md:hidden" aria-label="Toggle navigation"><Icon name={open ? 'close' : 'menu'} /></button>
    </div>
    {open && <nav className="border-t border-white/5 bg-[#07111f] px-5 py-5 md:hidden">{nav.map(([label, href]) => <a onClick={() => setOpen(false)} key={href} className="block border-b border-white/5 py-4 text-slate-300" href={href}>{label}</a>)}<a className="button mt-5 w-full" href={whatsapp} target="_blank" rel="noreferrer">Request demo</a></nav>}
  </header>
}

function Hero() {
  return <section id="top" className="relative overflow-hidden pt-36 lg:pt-44">
    <div className="orb left-[-12rem] top-20 h-[28rem] w-[28rem] bg-cyan-500/15"/><div className="orb right-[-10rem] top-[-5rem] h-[32rem] w-[32rem] bg-violet-500/15"/>
    <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:pb-32">
      <div>
        <div className="eyebrow"><span className="pulse-dot"/> Commercial-ready software portfolio</div>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-.055em] text-white sm:text-6xl lg:text-7xl">Software products built to be <span className="text-gradient">deployed, licensed and scaled.</span></h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">Nexa Technologies offers three focused POS products for retail, multi-tenant cloud operations and restaurants—available for white-label licensing, reseller partnerships, customization and acquisition discussions.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a className="button" href="#products">Explore products <Icon name="arrow" size={18}/></a><a className="button button-secondary" href={whatsapp} target="_blank" rel="noreferrer">Discuss a partnership</a></div>
        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500"><span>✓ Product demonstrations</span><span>✓ Commercial documentation</span><span>✓ Rebranding available</span></div>
      </div>
      <div className="relative">
        <div className="showcase-panel">
          <div className="flex items-center justify-between border-b border-white/7 px-5 py-4"><div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/70"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300/70"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70"/></div><span className="text-[11px] uppercase tracking-[.2em] text-slate-600">Product portfolio</span></div>
          <div className="p-5 sm:p-7"><div className="grid gap-3">{products.map((p, i) => <a href={`#${p.id}`} key={p.id} className="group flex items-center gap-4 rounded-2xl border border-white/7 bg-white/[.025] p-4 transition hover:border-cyan-300/25 hover:bg-white/[.045]"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[.05] font-semibold text-slate-200">0{i+1}</span><span className="min-w-0 flex-1"><strong className="block text-sm text-white">{p.name}</strong><span className="mt-1 block truncate text-xs text-slate-500">{p.badge}</span></span><Icon name="arrow" size={18} className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-300"/></a>)}</div>
            <div className="mt-5 grid grid-cols-3 gap-3">{[['3','Products'],['4','Deal models'],['1','Direct contact']].map(([n,l])=><div key={l} className="rounded-2xl border border-white/7 bg-black/15 p-4 text-center"><strong className="block text-xl text-white">{n}</strong><span className="mt-1 block text-[10px] uppercase tracking-wider text-slate-600">{l}</span></div>)}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

function ProductCard({ product, index }) {
  return <article id={product.id} className="product-card scroll-mt-28">
    <div className={`absolute inset-0 bg-gradient-to-br ${product.accent} opacity-70`}/>
    <div className="relative grid gap-9 p-6 sm:p-9 lg:grid-cols-[.9fr_1.1fr] lg:p-11">
      <div>
        <div className="eyebrow">0{index + 1} / {product.badge}</div>
        <h3 className="mt-5 text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl">{product.name}</h3>
        <p className="mt-4 text-xl leading-8 text-slate-200">{product.headline}</p>
        <p className="mt-5 leading-7 text-slate-400">{product.summary}</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">{product.metrics.map(([a,b])=><div key={a} className="rounded-xl border border-white/8 bg-black/15 p-3"><span className="block text-[10px] uppercase tracking-wider text-slate-600">{a}</span><strong className="mt-1 block text-sm font-medium text-slate-200">{b}</strong></div>)}</div>
      </div>
      <div className="grid content-start gap-5">
        <div className="media-placeholder"><div className="relative z-10 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200"><Icon name="image" size={25}/></span><strong className="mt-4 block text-sm text-slate-200">Product screenshot gallery</strong><span className="mt-1 block text-xs text-slate-600">Add images inside public/media/{product.id}/screenshots</span></div></div>
        <div className="grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-white/8 bg-black/15 p-5"><h4 className="text-sm font-semibold text-white">Core capabilities</h4><ul className="mt-4 space-y-3">{product.features.map(f=><li key={f} className="flex gap-2.5 text-sm text-slate-400"><Icon name="check" size={16} className="mt-0.5 shrink-0 text-cyan-300"/>{f}</li>)}</ul></div><div className="rounded-2xl border border-white/8 bg-black/15 p-5"><h4 className="text-sm font-semibold text-white">Commercial fit</h4><dl className="mt-4 space-y-4 text-sm"><div><dt className="text-xs text-slate-600">Ideal for</dt><dd className="mt-1 text-slate-300">{product.audience}</dd></div><div><dt className="text-xs text-slate-600">Deployment</dt><dd className="mt-1 text-slate-300">{product.deployment}</dd></div><div><dt className="text-xs text-slate-600">Availability</dt><dd className="mt-1 text-slate-300">{product.availability}</dd></div></dl></div></div>
        <div className="flex flex-col gap-3 sm:flex-row"><a className="button flex-1" href={whatsapp} target="_blank" rel="noreferrer"><Icon name="play" size={17}/> Request product demo</a><a className="button button-secondary" href={github} target="_blank" rel="noreferrer">Repository <Icon name="external" size={16}/></a></div>
      </div>
    </div>
  </article>
}

function App() {
  return <div className="min-h-screen"><Header/><main><Hero/>
    <section id="products" className="section"><div className="section-heading"><div><div className="eyebrow">Our software portfolio</div><h2>Three products. Multiple commercial paths.</h2></div><p>Each solution can be demonstrated independently and discussed under the deal structure that best fits your company.</p></div><div className="mt-12 space-y-7">{products.map((p,i)=><ProductCard key={p.id} product={p} index={i}/>)}</div></section>
    <section id="licensing" className="section"><div className="rounded-[2rem] border border-white/8 bg-white/[.025] p-6 sm:p-10 lg:p-14"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><div className="eyebrow">Commercial partnerships</div><h2 className="mt-5">Choose how you want to work with us.</h2><p className="mt-5 leading-7 text-slate-400">We structure discussions around the buyer’s market, client portfolio, desired ownership level and customization requirements.</p><a className="button mt-8" href={whatsapp} target="_blank" rel="noreferrer">Start a discussion <Icon name="arrow" size={18}/></a></div><div className="grid gap-4 sm:grid-cols-2">{licensing.map(([title,text],i)=><div key={title} className="rounded-2xl border border-white/8 bg-[#07111f]/60 p-6"><span className="text-xs font-semibold text-cyan-300">0{i+1}</span><h3 className="mt-4 text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{text}</p></div>)}</div></div></div></section>
    <section id="about" className="section"><div className="grid gap-12 lg:grid-cols-2"><div><div className="eyebrow">About Nexa Technologies</div><h2 className="mt-5">Focused software products for real business operations.</h2></div><div className="space-y-5 text-lg leading-8 text-slate-400"><p>Nexa Technologies develops practical commercial software with an emphasis on clear workflows, maintainable architecture and deployment readiness.</p><p>Our present portfolio focuses on retail and restaurant operations, with options for software houses, resellers, operators and acquisition buyers.</p></div></div><div className="mt-12 grid gap-4 md:grid-cols-3">{[['Built for operations','Products focus on day-to-day billing, stock, reporting and administration.'],['Commercial flexibility','Licensing, rebranding, customisation and ownership discussions are available.'],['Direct collaboration','Work directly with the product developer for technical and commercial review.']].map(([t,d])=><div key={t} className="rounded-2xl border border-white/8 bg-white/[.025] p-6"><h3 className="font-semibold text-white">{t}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{d}</p></div>)}</div></section>
    <section id="contact" className="section pt-8"><div className="contact-panel"><div><div className="eyebrow">Request access</div><h2 className="mt-5 max-w-2xl">Review screenshots, arrange a demo and discuss commercial terms.</h2><p className="mt-5 max-w-xl leading-7 text-slate-400">Tell us which product interests you and whether you are considering licensing, resale, customization or acquisition.</p></div><div className="flex flex-col gap-3 lg:min-w-72"><a className="button" href={whatsapp} target="_blank" rel="noreferrer"><Icon name="phone" size={17}/> WhatsApp +92 326 9204504</a><a className="button button-secondary" href={github} target="_blank" rel="noreferrer"><Icon name="external" size={17}/> View GitHub portfolio</a></div></div></section>
  </main><footer className="border-t border-white/5 py-8"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© {new Date().getFullYear()} Nexa Technologies. All rights reserved.</span><div className="flex gap-5"><a className="hover:text-slate-300" href={github} target="_blank" rel="noreferrer">GitHub</a><a className="hover:text-slate-300" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div></div></footer></div>
}

export default App
