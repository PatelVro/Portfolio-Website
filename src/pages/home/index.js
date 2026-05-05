import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";

import {
  meta,
  status,
  about,
  services,
  work,
  timeline,
  skills,
  education,
  certifications,
  languages,
  social,
  marqueeUpper,
  marqueeLower,
  tickerRows,
} from "../../content_option";

import TerminalHero from "./TerminalHero";
import {
  StatusStrip,
  Marquee,
  Ticker,
  About,
  Services,
  Work,
  Timeline,
  Skills,
  Credentials,
  Contact,
  Footer,
} from "./sections";

/* ============= HERO HEADER ============= */
const HeroSection = () => (
  <section id="top" className="section hero">
    <div className="wrap">
      <div className="meta-row">
        <span><span className="live"><span className="pip" />AVAILABLE</span></span>
        <span>LOC <b>Toronto / EST</b></span>
        <span>ROLE <b>{meta.role}</b></span>
        <span>v <b>{meta.version}</b></span>
      </div>

      <div className="hero-grid">
        <div>
          <h1 className="h-mega">
            <span className="l1">HILL</span>
            <span className="l2">PATEL<em className="serif">.</em></span>
          </h1>

          <p className="lede">{meta.tagline}</p>
          <p className="lede" style={{ marginTop: 8, color: "var(--ink-3)", fontSize: 14 }}>
            Marketplace ops · Pricing · Integrations · Python · React · SQL.
          </p>

          <div className="cta-row">
            <a className="btn primary" href="#work">
              <span>Selected Work</span>
              <span className="arr">↗</span>
            </a>
            <a className="btn" href="#contact">
              <span>Get in touch</span>
            </a>
            <a className="now" href={status.href} target="_blank" rel="noreferrer">
              <span className="pip" />
              NOW BUILDING / <b>{status.project}</b>
            </a>
          </div>
        </div>

        <div>
          <TerminalHero />
        </div>
      </div>
    </div>
  </section>
);

/* ============= HOME ============= */
export const Home = () => {
  /* Scroll reveals */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Custom cursor */
  useEffect(() => {
    const ring = document.getElementById("cursorRing");
    const dot = document.getElementById("cursorDot");
    if (!ring || !dot) return;

    let rx = 0, ry = 0, tx = 0, ty = 0;
    let raf = 0;

    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
    const tick = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);

    const enter = () => ring.classList.add("is-hover");
    const leave = () => ring.classList.remove("is-hover");
    const hoverables = "a, button, .work-row, .svc, .work-card, .cert, .lk";
    const els = document.querySelectorAll(hoverables);
    els.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  /* Anchor scroll on hash arrival (covers external links and route redirects) */
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
    }
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <HeroSection />
      <StatusStrip status={status} />

      <Marquee items={marqueeUpper} />

      <About data={about} />
      <Services services={services} />

      <Marquee items={marqueeLower} reverse />

      <Work projects={work} />

      <Ticker rows={tickerRows} />

      <Timeline rows={timeline} />
      <Skills rows={skills} />
      <Credentials education={education} certifications={certifications} languages={languages} />
      <Contact meta={meta} status={status} social={social} />
      <Footer meta={meta} social={social} />
    </HelmetProvider>
  );
};
