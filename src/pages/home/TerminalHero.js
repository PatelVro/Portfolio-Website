import React, { useEffect, useMemo, useState } from "react";

const HERO_LINES = [
  { t: "pf", s: "hill@cirelay" }, { t: "di", s: ":" }, { t: "kw", s: "~/portfolio" }, { t: "pf", s: "$ " }, { t: "cm", s: "whoami --verbose\n" },
  { t: "di", s: "> Operations & Systems Lead, Toronto, CA\n" },
  { t: "di", s: "> Day: pricing, marketplaces, integrations, team.\n" },
  { t: "di", s: "> Night: Python, JavaScript, React, bots.\n\n" },

  { t: "pf", s: "hill@cirelay" }, { t: "di", s: ":" }, { t: "kw", s: "~/portfolio" }, { t: "pf", s: "$ " }, { t: "cm", s: "cat now.txt\n" },
  { t: "di", s: "> Building " }, { t: "hi", s: "Cirelay Trader" }, { t: "di", s: ", a 9-strategy ensemble\n" },
  { t: "di", s: "  on BTC / ETH / SOL. Sharpe " }, { t: "num", s: "1.43" }, { t: "di", s: ", MaxDD " }, { t: "num", s: "-32%" }, { t: "di", s: ".\n\n" },

  { t: "pf", s: "hill@cirelay" }, { t: "di", s: ":" }, { t: "kw", s: "~/portfolio" }, { t: "pf", s: "$ " }, { t: "cm", s: "ls -la stack/\n" },
  { t: "di", s: "drwx " }, { t: "hi", s: "python/" }, { t: "di", s: "  drwx " }, { t: "hi", s: "javascript/" }, { t: "di", s: "  drwx " }, { t: "hi", s: "sql/" }, { t: "di", s: "\n" },
  { t: "di", s: "drwx " }, { t: "hi", s: "react/" }, { t: "di", s: "   drwx " }, { t: "hi", s: "go/" }, { t: "di", s: "          drwx " }, { t: "hi", s: "aws/" }, { t: "di", s: "\n\n" },

  { t: "pf", s: "hill@cirelay" }, { t: "di", s: ":" }, { t: "kw", s: "~/portfolio" }, { t: "pf", s: "$ " }, { t: "cm", s: "systemctl status portfolio\n" },
  { t: "ok", s: "● portfolio.service, active (running)\n" },
  { t: "di", s: "  Loaded: loaded (" }, { t: "hi", s: "/etc/hill/portfolio.conf" }, { t: "di", s: ")\n" },
  { t: "di", s: "  Memory: 0.0%   CPU: 0.1%   Uptime: ∞\n\n" },

  { t: "pf", s: "hill@cirelay" }, { t: "di", s: ":" }, { t: "kw", s: "~/portfolio" }, { t: "pf", s: "$ " }, { t: "cm", s: 'echo "scroll for more"' },
];

const TerminalHero = () => {
  const flat = useMemo(() => {
    const txt = HERO_LINES.map((l) => l.s).join("");
    const classes = [];
    let pos = 0;
    for (const l of HERO_LINES) {
      for (let i = 0; i < l.s.length; i++) classes[pos++] = l.t;
    }
    return { txt, classes };
  }, []);

  const [n, setN] = useState(0);

  useEffect(() => {
    let raf, last = performance.now(), acc = 0;
    const tick = (now) => {
      const dt = now - last;
      last = now;
      acc += dt;
      while (acc > 0 && n < flat.txt.length) {
        const ch = flat.txt[n];
        const cost = ch === "\n" ? 60 : ch === " " ? 8 : 14;
        if (acc >= cost) {
          acc -= cost;
          setN((v) => v + 1);
          break;
        } else break;
      }
      if (n < flat.txt.length) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [n, flat.txt]);

  useEffect(() => {
    if (n >= flat.txt.length) {
      const t = setTimeout(() => setN(0), 4500);
      return () => clearTimeout(t);
    }
  }, [n, flat.txt.length]);

  const segs = [];
  let cursor = 0;
  for (const l of HERO_LINES) {
    if (cursor >= n) break;
    const end = Math.min(n, cursor + l.s.length);
    segs.push({ t: l.t, s: l.s.slice(0, end - cursor) });
    cursor += l.s.length;
  }

  return (
    <div className="term">
      <div className="bar">
        <div className="dots"><span /><span /><span /></div>
        <div className="title">~/portfolio — zsh — 92×24</div>
        <div className="stat">● live</div>
      </div>
      <div className="body">
        {segs.map((s, i) => (
          <span key={i} className={s.t}>{s.s}</span>
        ))}
        <span className="cur" />
      </div>
    </div>
  );
};

export default TerminalHero;
