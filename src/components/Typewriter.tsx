import { useEffect, useState } from "react";

export function Typewriter({
  text,
  speed = 75,
  startDelay = 0,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount((count) => {
          if (count >= text.length) {
            clearInterval(interval);

            return count;
          }

          return count + 1;
        });
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{ visibility: "hidden" }}>{text}</span>
      <span style={{ position: "absolute", inset: 0 }}>
        {text.slice(0, count)}
      </span>
    </span>
  );
}
