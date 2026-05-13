import { useEffect, useRef, useState } from "react";

function AnimatedProgress({
  targetProgress = 75,
  duration = 1800,
  color = "cyan",
}) {
  const [progress, setProgress] = useState(0);

  const progressRef = useRef(null);

  const colorClasses = {
  cyan: "bg-cyan-400",
  purple: "bg-purple-400",
  yellow: "bg-yellow-400",
};

  useEffect(() => {
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;

          let current = 0;

          const intervalTime = 16;

          const steps = duration / intervalTime;

          const progressStep = targetProgress / steps;

          const timer = setInterval(() => {
            current++;

            setProgress((prev) => {
              const next = prev + progressStep;

              return next >= targetProgress
                ? targetProgress
                : next;
            });

            if (current >= steps) {
              clearInterval(timer);
            }
          }, intervalTime);
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [targetProgress, duration]);

  return (
    <div
      ref={progressRef}
      className="progress-bar h-3 rounded-full bg-white/10 overflow-hidden"
    >
      <div
        className={`h-full ${colorClasses[color]} transition-all`}
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
}

export default AnimatedProgress;