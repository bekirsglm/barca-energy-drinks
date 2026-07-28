"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const flavors = [
  { name: "Original", note: "Timeless taste. Pure energy.", color: "#16469a" },
  { name: "Watermelon", note: "A cool kick of clarity.", color: "#ef3340" },
  { name: "Red Grape", note: "Bold depth. Instantly memorable.", color: "#7257a8" },
];

const reveal = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

export default function Home() {
  const [flavor, setFlavor] = useState(1);
  const [menu, setMenu] = useState(false);
  const active = flavors[flavor];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#031126] text-[#f4f0e8]" style={{ "--accent": active.color } as React.CSSProperties}>
      <nav className="nav flex items-center justify-between">
        <a className="brand" href="#top" aria-label="Barça Energy home"><span>BARÇA</span><b>ENERGY</b></a>
        <div className={`navlinks items-center ${menu ? "open" : ""}`}>
          <a href="#flavors" onClick={() => setMenu(false)}>Flavours</a>
          <a href="#story" onClick={() => setMenu(false)}>Our energy</a>
          <a href="#collective" onClick={() => setMenu(false)}>Collective</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
        </div>
        <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? "Close" : "Menu"}</button>
      </nav>

      <section className="hero" id="top">
        <div className="heroGlow" />
        <motion.div className="heroCopy" initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.85,ease:[.22,1,.36,1]}}>
          <p className="eyebrow">Official licensed product · FC Barcelona</p>
          <h1>FEEL THE<br/><i>POWER</i><br/>OF BARÇA.</h1>
          <p className="lead">The passion in the stands. The charge before kick-off. Bottled for every day.</p>
          <a className="cta" href="#flavors">Discover the lineup <span>↘</span></a>
        </motion.div>
        <motion.div className="heroProduct" initial={{opacity:0,scale:.88,rotate:3}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:1.15,delay:.15,ease:[.22,1,.36,1]}}>
          <div className="orbit orbitOne"/><div className="orbit orbitTwo"/>
          <img src="/assets/cans.jpeg" alt="Barça Energy Original, Watermelon and Red Grape cans" />
          <span className="productTag">250 ML<br/>PURE<br/>MOMENTUM</span>
        </motion.div>
        <div className="scroll">SCROLL TO CHARGE <span>↓</span></div>
      </section>

      <section className="ticker" aria-label="Brand statement"><div>VISCA EL BARÇA · FEEL THE POWER · VISCA EL BARÇA · FEEL THE POWER · </div></section>

      <section className="flavors" id="flavors">
        <motion.div className="sectionHead" {...reveal}><p>01 / THE LINEUP</p><h2>THREE FLAVOURS.<br/><em>ONE CREST.</em></h2></motion.div>
        <div className="flavorStage">
          <div className="flavorVisual"><AnimatePresence mode="wait"><motion.div key={active.name} className="grid h-full w-full place-items-center" initial={{opacity:0,x:45,scale:.94}} animate={{opacity:1,x:0,scale:1}} exit={{opacity:0,x:-45,scale:.94}} transition={{duration:.45,ease:[.22,1,.36,1]}}><span className="bigNumber">0{flavor + 1}</span><img src="/assets/cans.jpeg" alt={`${active.name} energy drink`} /></motion.div></AnimatePresence></div>
          <motion.div className="flavorInfo" {...reveal}>
            <p className="eyebrow">Current selection</p><h3>{active.name}</h3><p>{active.note}</p>
            <div className="flavorBtns">{flavors.map((item, i) => <button key={item.name} className={i === flavor ? "active" : ""} onClick={() => setFlavor(i)}><span style={{background:item.color}} />{item.name}</button>)}</div>
            <p className="fine">Serve ice cold. Turn the volume up.</p>
          </motion.div>
        </div>
      </section>

      <section className="manifesto" id="story">
        <img src="/assets/team-hero.png" alt="FC Barcelona players and Barça Energy" />
        <motion.div className="manifestoOverlay" {...reveal}><p>02 / OUR ENERGY</p><h2>MORE THAN<br/>A DRINK.<br/><i>A FEELING.</i></h2><p className="statement">Built for late nights, early starts and every minute that matters. A bold taste for people who never watch life from the sidelines.</p></motion.div>
      </section>

      <section className="collective" id="collective">
        <motion.div className="watch" initial={{opacity:0,scale:.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true,amount:.25}} transition={{duration:1}}><motion.img whileHover={{scale:1.04,rotate:-2}} transition={{type:"spring",stiffness:120}} src="/assets/watch.jpeg" alt="FC Barcelona anniversary watch" /></motion.div>
        <motion.div className="collectiveCopy" {...reveal}><p>03 / THE COLLECTIVE</p><h2>ONE BADGE.<br/><i>ENDLESS<br/>OBSESSION.</i></h2><p>From matchday energy to objects of desire, the crest lives wherever ambition does.</p><a href="#contact">Enter the world <span>↗</span></a></motion.div>
      </section>

      <footer id="contact"><div><span className="footerMark">BARÇA<br/><b>ENERGY</b></span><h2>READY TO<br/>FEEL IT?</h2></div><div className="footerLinks"><a href="mailto:info@neweramerch.com">INFO@NEWERAMERCH.COM ↗</a><p>Official FC Barcelona licensed product.<br/>Made for the energy of the game.</p><small>© 2026 BARÇA ENERGY</small></div></footer>
    </main>
  );
}
