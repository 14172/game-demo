import { useEffect, useRef, useState } from "react";

function Rewards() {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const sectionRef = useRef(null);

  useEffect(() => {

    const targetCount = 750000;
    const targetProgress = 75;

    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting && !started) {

          started = true;

          let current = 0;

          const duration = 1800;
          const intervalTime = 16;

          const steps = duration / intervalTime;

          const countStep = targetCount / steps;
          const progressStep = targetProgress / steps;

          const timer = setInterval(() => {

            current++;

            setCount((prev) => {

              const next = prev + countStep;

              return next >= targetCount
                ? targetCount
                : next;
            });

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
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();

  }, []);

  return (
    <section
      ref={sectionRef}
      id="rewards"
      className="py-20 px-6 max-w-6xl mx-auto"
    >

      <div className="text-center mb-16">

        <h2 className="text-3xl font-bold mb-4 font-orbitron">
          MILESTONE REWARDS
        </h2>

        <p className="text-gray-500">
          達成全球預約人數，解鎖史詩級虛寶
        </p>

      </div>

      <div className="glass-card p-8 mb-12">

        <div className="flex justify-between mb-4 font-bold text-cyan-400">

          <span>目前預約人數</span>

          <span className="font-orbitron">
            {Math.floor(count).toLocaleString()} / 1,000,000
          </span>

        </div>

        <div className="progress-bar mb-10">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>

        </div>

        {/* 下方是獎勵卡片 */}

      </div>
    </section>
  );
}

export default Rewards;