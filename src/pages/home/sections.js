import React, { useEffect, useRef, useState } from "react";

/* ============= STATUS STRIP ============= */
export const StatusStrip = ({ status }) => (
  <div className="status-strip">
    <div className="cell">
      <span className="k">Status</span>
      <span className="v"><span className="live" /><span className="em">Online</span></span>
    </div>
    <div className="cell">
      <span className="k">Location</span>
      <span className="v">Toronto / EST</span>
    </div>
    <div className="cell">
      <span className="k">Currently building</span>
      <span className="v">{status.project}</span>
    </div>
    <div className="cell">
      <span className="k">Inbox</span>
      <span className="v">hill@hillpatel.com</span>
    </div>
  </div>
);

/* ============= MARQUEE ============= */
export const Marquee = ({ items, reverse, fast }) => {
  const arr = [...items, ...items, ...items];
  return (
    <div className={`marquee ${reverse ? "rev" : ""} ${fast ? "fast" : ""}`}>
      <div className="track">
        {arr.map((it, i) => (
          <span key={i} className={`it ${i % 2 ? "muted" : ""}`}>
            {it}
            <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* ============= TICKER ============= */
export const Ticker = ({ rows }) => {
  const arr = [...rows, ...rows, ...rows];
  return (
    <div className="ticker">
      <div className="track">
        {arr.map((r, i) => (
          <span key={i}>
            <span className="dot">●</span>
            <span>{r[0]}</span>
            <span className="v">{r[1]}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* ============= ABOUT ============= */
export const About = ({ data }) => (
  <section id="about" className="section">
    <div className="wrap">
      <div className="section-head">
        <div className="lhs">
          <span className="num">/02</span>
          <span className="h-section label">// About</span>
          <span className="sub">~/who-am-i.md</span>
        </div>
        <span className="meta">Operations & Systems</span>
      </div>

      <div className="about-grid">
        <div className="reveal">
          {data.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="facts reveal">
          {data.facts.map(([k, v], i) => (
            <div key={i}>
              <div className="k">{k}</div>
              <div className="v">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ============= SERVICES ============= */
export const Services = ({ services }) => (
  <section id="services" className="section">
    <div className="wrap">
      <div className="section-head">
        <div className="lhs">
          <span className="num">/03</span>
          <span className="h-section label">// Services</span>
          <span className="sub">~/what-i-do/</span>
        </div>
        <span className="meta">{String(services.length).padStart(2, "0")} capabilities</span>
      </div>
    </div>
    <div className="wrap">
      <div className="services">
        {services.map((s) => (
          <div key={s.n} className="svc reveal">
            <span className="n">{s.n}</span>
            <span className="arr">→</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="stack">
              {s.stack.map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============= WORK (list layout with hover preview) ============= */
export const Work = ({ projects }) => {
  const previewRef = useRef(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    const onMove = (e) => {
      el.style.left = e.clientX + 30 + "px";
      el.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="lhs">
            <span className="num">/04</span>
            <span className="h-section label">// Selected Work</span>
            <span className="sub">~/projects/*</span>
          </div>
          <span className="meta">{projects.length} shipped</span>
        </div>
      </div>

      <div className="wrap">
        <div className="work-list">
          {projects.map((p, i) => (
            <a
              key={p.slug}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="work-row"
              onMouseEnter={() => setHover(p)}
              onMouseLeave={() => setHover(null)}
            >
              <span className="num tabular">{String(i + 1).padStart(2, "0")} /</span>
              <div className="name">
                {p.title}
                <span className="yr">— {p.year}</span>
              </div>
              <div className="tags">
                {p.tags.slice(0, 3).map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="role">{p.role}</div>
              <div className="arr">↗</div>
            </a>
          ))}
        </div>
      </div>

      <div ref={previewRef} className={`hov-preview ${hover ? "show" : ""}`}>
        {hover && <img src={hover.img} alt={hover.title} loading="lazy" decoding="async" />}
      </div>
    </section>
  );
};

/* ============= TIMELINE ============= */
export const Timeline = ({ rows }) => (
  <section id="timeline" className="section">
    <div className="wrap">
      <div className="section-head">
        <div className="lhs">
          <span className="num">/05</span>
          <span className="h-section label">// Career</span>
          <span className="sub">~/git log --oneline</span>
        </div>
        <span className="meta">{rows.length} positions</span>
      </div>

      <div className="tl">
        {rows.map((r, i) => (
          <div key={i} className="tl-row reveal">
            <div className="y tabular">{r.y}</div>
            <div>
              <div className="role">{r.role}</div>
              <div className="co">{r.co}</div>
              <div className="note">{r.note}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============= SKILLS ============= */
export const Skills = ({ rows }) => {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll(".sk").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="lhs">
            <span className="num">/06</span>
            <span className="h-section label">// Skills</span>
            <span className="sub">~/stack.json</span>
          </div>
          <span className="meta">Languages · Automation · Frontend · Infra</span>
        </div>

        <div ref={ref} className="skills-grid">
          {rows.map((s, i) => (
            <div key={i} className="sk" style={{ "--w": s.v + "%" }}>
              <div className="n">
                <span>{s.name}</span>
                <span className="grp">{s.group}</span>
              </div>
              <div className="v">
                <div className="bar"><i /></div>
                <span className="tabular">{s.v}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============= CREDENTIALS (Education + Certs + Languages) ============= */
export const Credentials = ({ education, certifications, languages }) => (
  <section id="credentials" className="section">
    <div className="wrap">
      <div className="section-head">
        <div className="lhs">
          <span className="num">/07</span>
          <span className="h-section label">// Credentials</span>
          <span className="sub">~/certs/</span>
        </div>
        <span className="meta">Education · Certifications · Languages</span>
      </div>

      <h3 className="h-section" style={{ marginBottom: 18, color: "var(--ink-3)" }}>// Education</h3>
      <div className="edu-grid reveal">
        {education.map((e, i) => (
          <div key={i} className="edu">
            <h4>{e.school}</h4>
            <div className="deg">{e.degree}</div>
            <div className="meta tabular"><span>{e.date}</span><span>{e.loc}</span></div>
          </div>
        ))}
      </div>

      <h3 className="h-section" style={{ margin: "48px 0 18px", color: "var(--ink-3)" }}>
        // Certifications ({certifications.length})
      </h3>
      <div className="cert-grid reveal">
        {certifications.map((c, i) => (
          <div key={i} className="cert">
            <div className="l">
              <h4>{c.name}</h4>
              <div className="org">{c.org}</div>
            </div>
            <div className="r">{c.date}</div>
          </div>
        ))}
      </div>

      <h3 className="h-section" style={{ margin: "48px 0 18px", color: "var(--ink-3)" }}>// Languages</h3>
      <div className="lang-row reveal">
        {languages.map((l, i) => (
          <div key={i} className="lang">
            <span className="n">{l.name}</span>
            <span className="lvl">{l.level}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============= CONTACT ============= */
export const Contact = ({ meta, status, social }) => (
  <section id="contact" className="section contact">
    <div className="wrap">
      <div className="ct-grid">
        <div>
          <span className="eyebrow">/08 — Contact</span>
          <h2 className="h-display" style={{ marginTop: 18 }}>
            Let’s automate <em className="serif em">the boring parts</em><br />
            of your business.
          </h2>
          <p className="lede">
            Whether it’s an automation idea, a support escalation, or a website that needs to ship,
            drop a line. I read everything.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <a className="btn primary" href={`mailto:${meta.email}`}>
              <span>{meta.email}</span>
              <span className="arr">↗</span>
            </a>
            <a className="btn" href={`tel:${meta.phone.replace(/\D/g, "")}`}>
              <span>{meta.phone}</span>
            </a>
          </div>
        </div>

        <div className="links">
          <a className="lk" href={social.github} target="_blank" rel="noreferrer">
            <span><span style={{ color: "var(--ink-3)" }}>01 /</span>&nbsp;&nbsp;GitHub</span>
            <span className="arr">↗</span>
          </a>
          <a className="lk" href={social.linkedin} target="_blank" rel="noreferrer">
            <span><span style={{ color: "var(--ink-3)" }}>02 /</span>&nbsp;&nbsp;LinkedIn</span>
            <span className="arr">↗</span>
          </a>
          <a className="lk" href={social.instagram} target="_blank" rel="noreferrer">
            <span><span style={{ color: "var(--ink-3)" }}>03 /</span>&nbsp;&nbsp;Instagram</span>
            <span className="arr">↗</span>
          </a>
          <a className="lk" href={status.href} target="_blank" rel="noreferrer">
            <span><span style={{ color: "var(--ink-3)" }}>04 /</span>&nbsp;&nbsp;{status.project}</span>
            <span className="arr">↗</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ============= FOOTER ============= */
export const Footer = ({ meta, social }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="col">
        <h4>// Hill Patel</h4>
        <p>
          Operations & Systems Lead. Marketplace ops, pricing, integrations, automation,
          and full-stack web. Toronto-based, working anywhere.
        </p>
      </div>
      <div className="col">
        <h4>// Sitemap</h4>
        <a href="#top">Home</a>
        <a href="#work">Selected Work</a>
        <a href="#services">Services</a>
        <a href="#timeline">Career</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="col">
        <h4>// Elsewhere</h4>
        <a href={social.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={social.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
        <a href={`mailto:${meta.email}`}>{meta.email}</a>
      </div>
      <div className="signoff">
        <span>© {year} HILL PATEL — ALL SYSTEMS NOMINAL</span>
        <span className="tabular">v{meta.version} · BUILT WITH BOTS</span>
      </div>
    </footer>
  );
};
