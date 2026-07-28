"use client";

import { useState } from "react";

const flavors = [
  { name: "Original", note: "Timeless taste. Pure energy.", color: "#16469a" },
  { name: "Watermelon", note: "A cool kick of clarity.", color: "#ef3340" },
  { name: "Red Grape", note: "Bold depth. Instantly memorable.", color: "#7257a8" },
];

export default function Home() {
  const [flavor, setFlavor] = useState(1);
  const [menu, setMenu] = useState(false);
  const active = flavors[flavor];

  return (
    <main style={{ "--accent": active.color } as React.CSSProperties}>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Barça Energy home"><span>BARÇA</span><b>ENERGY</b></a>
        <div className={`navlinks ${menu ? "open" : ""}`}>
          <a href="#flavors" onClick={() => setMenu(false)}>Flavours</a>
          <a href="#story" onClick={() => setMenu(false)}>Our energy</a>
          <a href="#collective" onClick={() => setMenu(false)}>Collective</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
        </div>
        <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? "Close" : "Menu"}</button>
      </nav>

      <section className="hero" id="top">
        <div className="heroGlow" />
        <div className="heroCopy">
          <p className="eyebrow">Official licensed product · FC Barcelona</p>
          <h1>FEEL THE<br/><i>POWER</i><br/>OF BARÇA.</h1>
          <p className="lead">The passion in the stands. The charge before kick-off. Bottled for every day.</p>
          <a className="cta" href="#flavors">Discover the lineup <span>↘</span></a>
        </div>
        <div className="heroProduct">
          <div className="orbit orbitOne"/><div className="orbit orbitTwo"/>
          <img src="/assets/cans.jpeg" alt="Barça Energy Original, Watermelon and Red Grape cans" />
          <span className="productTag">250 ML<br/>PURE<br/>MOMENTUM</span>
        </div>
        <div className="scroll">SCROLL TO CHARGE <span>↓</span></div>
      </section>

      <section className="ticker" aria-label="Brand statement"><div>VISCA EL BARÇA · FEEL THE POWER · VISCA EL BARÇA · FEEL THE POWER · </div></section>

      <section className="flavors" id="flavors">
        <div className="sectionHead"><p>01 / THE LINEUP</p><h2>THREE FLAVOURS.<br/><em>ONE CREST.</em></h2></div>
        <div className="flavorStage">
          <div className="flavorVisual"><span className="bigNumber">0{flavor + 1}</span><img src="/assets/cans.jpeg" alt={`${active.name} energy drink`} /></div>
          <div className="flavorInfo">
            <p className="eyebrow">Current selection</p><h3>{active.name}</h3><p>{active.note}</p>
            <div className="flavorBtns">{flavors.map((item, i) => <button key={item.name} className={i === flavor ? "active" : ""} onClick={() => setFlavor(i)}><span style={{background:item.color}} />{item.name}</button>)}</div>
            <p className="fine">Serve ice cold. Turn the volume up.</p>
          </div>
        </div>
      </section>

      <section className="manifesto" id="story">
        <img src="/assets/team-hero.png" alt="FC Barcelona players and Barça Energy" />
        <div className="manifestoOverlay"><p>02 / OUR ENERGY</p><h2>MORE THAN<br/>A DRINK.<br/><i>A FEELING.</i></h2><p className="statement">Built for late nights, early starts and every minute that matters. A bold taste for people who never watch life from the sidelines.</p></div>
      </section>

      <section className="collective" id="collective">
        <div className="watch"><img src="/assets/watch.jpeg" alt="FC Barcelona anniversary watch" /></div>
        <div className="collectiveCopy"><p>03 / THE COLLECTIVE</p><h2>ONE BADGE.<br/><i>ENDLESS<br/>OBSESSION.</i></h2><p>From matchday energy to objects of desire, the crest lives wherever ambition does.</p><a href="#contact">Enter the world <span>↗</span></a></div>
      </section>

      <footer id="contact"><div><span className="footerMark">BARÇA<br/><b>ENERGY</b></span><h2>READY TO<br/>FEEL IT?</h2></div><div className="footerLinks"><a href="mailto:info@neweramerch.com">INFO@NEWERAMERCH.COM ↗</a><p>Official FC Barcelona licensed product.<br/>Made for the energy of the game.</p><small>© 2026 BARÇA ENERGY</small></div></footer>
    </main>
  );
}
