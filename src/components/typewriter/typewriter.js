import React, { useEffect, useRef, useState } from 'react';

const Typewriter = ({ options = {} }) => {
  const {
    strings = [
      "Web Development",
      "Mobile App Development",
      "Data Scraping",
      "Automation Solutions",
    ],
    typeSpeed = 150,
    deleteSpeed = 50,
    pauseBetween = 1000,
    loop = true,
  } = options;

  const [displayText, setDisplayText] = useState('');
  const stringsRef = useRef(strings);
  stringsRef.current = strings;

  useEffect(() => {
    let cancelled = false;
    const timeouts = [];
    const wait = (ms) => new Promise((resolve) => {
      const t = setTimeout(resolve, ms);
      timeouts.push(t);
    });

    const run = async () => {
      let i = 0;
      while (!cancelled) {
        const list = stringsRef.current;
        if (!list || list.length === 0) {
          await wait(500);
          continue;
        }
        const text = list[i % list.length];

        for (let n = 0; n <= text.length; n++) {
          if (cancelled) return;
          setDisplayText(text.slice(0, n));
          await wait(typeSpeed - Math.random() * 60);
        }
        await wait(pauseBetween);
        for (let n = text.length; n >= 0; n--) {
          if (cancelled) return;
          setDisplayText(text.slice(0, n));
          await wait(deleteSpeed + Math.random() * 40);
        }
        await wait(pauseBetween / 2);

        i += 1;
        if (!loop && i >= list.length) return;
      }
    };

    const startTimer = setTimeout(run, 600);
    timeouts.push(startTimer);

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [typeSpeed, deleteSpeed, pauseBetween, loop]);

  return <span>{displayText}</span>;
};

export default Typewriter;
