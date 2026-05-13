import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import News from "./News";
import heroVideo from "../assets/v2_watermarked-3c685133-00f7-4f10-8dd0-9f94dbbd4833.mp4";
import c1Video from "../assets/c1.mp4";
import c1Img from "../assets/c1.jpg";
import c2Video from "../assets/c2.mp4";
import c2Img from "../assets/c2.jpg";
import { Chart } from "chart.js/auto";

function Hero() {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const sectionRef = useRef(null);

  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const chart3Ref = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    // 平滑滾動
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleClick = function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    // Intersection Observer
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-up");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      observer.observe(section);
    });

    // cleanup
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });

      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

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

              return next >= targetCount ? targetCount : next;
            });

            setProgress((prev) => {
              const next = prev + progressStep;

              return next >= targetProgress ? targetProgress : next;
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  //雷達生長動畫
  useEffect(() => {
  if (!chart1Ref.current || !chart2Ref.current || !chart3Ref.current) {
    return;
  }

  // 補回這段
  const chartConfig = (data, color) => ({
    type: "radar",

    data: {
      labels: ["攻擊", "防禦", "機動", "輔助", "生命", "射程"],

      datasets: [
        {
          data,
          backgroundColor: `${color}33`,
          borderColor: color,
          borderWidth: 2,
          pointRadius: 0,
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      animation: {
        duration: 1400,
  easing: "easeOutCirc",
      },

      scales: {
        r: {
          min: 0,
          max: 100,

          grid: {
            color: "rgba(255,255,255,0.1)",
          },

          angleLines: {
            color: "rgba(255,255,255,0.1)",
          },

          ticks: {
            display: false,
          },

          pointLabels: {
            color: "#888",

            font: {
              size: 10,
            },
          },
        },
      },

      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  const chart1 = new Chart(
    chart1Ref.current,
    chartConfig([0, 0, 0, 0, 0, 0], "#00f2ff"),
  );

  const chart2 = new Chart(
    chart2Ref.current,
    chartConfig([0, 0, 0, 0, 0, 0], "#a855f7"),
  );

  const chart3 = new Chart(
    chart3Ref.current,
    chartConfig([0, 0, 0, 0, 0, 0], "#eab308"),
  );

  let animated = false;

  const chartObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !animated) {
  animated = true;

  // 第1張
  setTimeout(() => {
    chart1.data.datasets[0].data = [95, 70, 85, 40, 75, 60];
    chart1.update();
  }, 0);

  // 第2張
  setTimeout(() => {
    chart2.data.datasets[0].data = [60, 40, 95, 90, 50, 80];
    chart2.update();
  }, 500);

  // 第3張
  setTimeout(() => {
    chart3.data.datasets[0].data = [80, 95, 40, 30, 98, 70];
    chart3.update();
  }, 1000);
}
    },
    {
      threshold: 0.3,
    },
  );

  const charsSection = document.querySelector("#chars");

  if (charsSection) {
    chartObserver.observe(charsSection);
  }

  return () => {
    chartObserver.disconnect();

    chart1.destroy();
    chart2.destroy();
    chart3.destroy();
  };
}, []);

  return (
    <>
      {/* Section 1: Hero Banner */}
      <section
        id="hero"
        className="hero-section relative overflow-hidden flex items-center justify-center text-center px-4"
        data-aos="fade-down"
      >
        {/* 背景影片 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 animate-up">
          <h2 className="font-orbitron hero-en text-cyan-400 tracking-wider mb-2 !font-black">
            NEXT-GEN GAME RPG
          </h2>

          <h1 className="mb-2 !text-5xl md:!text-[5rem] !font-black leading-tight mb-6 tracking-normal">
            覺醒吧
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              人類最後的希望
            </span>
          </h1>

          <p className="text-gray-400 max-w-lg mx-auto mb-4 text-sm md:text-base">
            在崩壞的星際邊境中，唯有與「NOVA」連結，才能重啟文明的曙光。限時事前登錄活動現正開啟。
          </p>

          <div className="flex flex-col md:flex-row gap-4 p-4 justify-center items-center">
            <button
              className="btn-neon hero-btn text-lg"
              onClick={() => alert("預約成功！獎勵將於公測發放")}
            >
              立即預約
            </button>

            <button
              type="button"
              className="hero-btn border border-white/20 hover:bg-white/10 transition"
            >
              <span className="mr-2 play-icon">▶</span>
              觀看宣傳 PV
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: 預約獎勵區 */}
      <section
        ref={sectionRef}
        id="rewards"
        className="py-24 md:py-32 px-6 max-w-6xl mx-auto"
        data-aos="fade-down"
      >
        {/* 標題 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-orbitron">
            MILESTONE REWARDS
          </h2>
          <p className="text-gray-500">達成全球預約人數，解鎖史詩級虛寶</p>
        </div>

        <div className="glass-card rounded-4 p-8 mb-12">
          <div className="flex justify-between mb-4 font-bold text-cyan-400">
            <span>目前預約人數</span>
            {/* 動態讀條 */}
            <span className="font-orbitron text-cyan-400">
              {Math.floor(count).toLocaleString()} / 1,000,000
            </span>
          </div>
          {/* 靜態讀條 */}
          <div className="progress-bar mb-10">
            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>

          {/* 獎勵卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border border-white/10 rounded bg-white/5">
              <div className="text-xs text-gray-500 mb-2">10萬達成</div>
              <div className="text-2xl mb-2">💎</div>
              <div className="text-sm font-bold">星源晶石 x500</div>
            </div>
            <div className="text-center p-4 border border-white/10 rounded bg-white/5">
              <div className="text-xs text-gray-500 mb-2">30萬達成</div>
              <div className="text-2xl mb-2">🎫</div>
              <div className="text-sm font-bold">高級招募券 x10</div>
            </div>
            <div className="text-center p-4 border border-cyan-500/50 rounded bg-cyan-500/10">
              <div className="text-xs text-cyan-400 mb-2">50萬已達成</div>
              <div className="text-2xl mb-2">⚔️</div>
              <div className="text-sm font-bold text-cyan-400">SR 限定武器</div>
            </div>
            <div className="text-center p-4 border border-white/5 rounded opacity-50">
              <div className="text-xs text-gray-500 mb-2">100萬解鎖</div>
              <div className="text-2xl mb-2">👤</div>
              <div className="text-sm font-bold">SSR 執行者 - 露娜</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 角色介紹 */}
      <section id="chars" className="py-24 md:py-32 px-6 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 font-orbitron">EXECUTORS</h2>
            <p className="text-gray-500">執行者名錄</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 角色 1 */}
            <div
              className="glass-card rounded-3 char-card scroll-card group"
              data-aos="zoom-in"
              data-aos-delay="0"
              onClick={() => navigate("/characters1")}
            >
              <div className="video-container">
                {/* 預覽圖  */}
                <img
                  src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=600"
                  className="placeholder-img absolute w-full h-full object-cover transition-opacity duration-500"
                />
                {/* Hover 影片 (此處用 placeholder 影片模擬) */}
                <video className="hover-video" autoPlay muted loop playsInline>
                  <source src={heroVideo} type="video/mp4" />
                </video>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] bg-cyan-500 text-black font-bold px-2 py-0.5">
                      VANGUARD
                    </span>
                    <h3 className="text-2xl font-bold font-orbitron mt-1">
                      AETHER
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500">POWER LEVEL</span>
                    <div className="text-cyan-400 font-orbitron">S-RANK</div>
                  </div>
                </div>
                <div className="chart-box flex justify-center h-[220px]">
                  <canvas ref={chart1Ref}></canvas>
                </div>
                <p className="text-gray-500 text-xs mt-4 leading-relaxed">
                  點擊查看詳細活動資訊與專屬獎勵內容...
                </p>
              </div>
            </div>
            {/* 角色 2 */}
            <div
              className="glass-card rounded-3 char-card scroll-card group"
              data-aos="zoom-in"
              data-aos-delay="150"
              onClick={() => navigate("/characters2")}
            >
              <div className="video-container">
                <img src={c1Img} />
                <video className="hover-video" autoPlay muted loop playsInline>
                  <source src={c1Video} type="video/mp4" />
                </video>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] bg-purple-500 text-white font-bold px-2 py-0.5">
                      HACKER
                    </span>
                    <h3 className="text-2xl font-bold font-orbitron mt-1">
                      CYRA
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500">POWER LEVEL</span>
                    <div className="text-purple-400 font-orbitron">A-RANK</div>
                  </div>
                </div>
                <div className="chart-box flex justify-center">
                  <canvas ref={chart2Ref}></canvas>
                </div>
                <p className="text-gray-500 text-xs mt-4 leading-relaxed">
                  點擊查看詳細活動資訊與專屬獎勵內容...
                </p>
              </div>
            </div>
            {/* 角色 3 */}
            <div
              className="glass-card rounded-3 char-card scroll-card group"
              data-aos="zoom-in"
              data-aos-delay="300"
              onClick={() => navigate("/characters3")}
            >
              <div className="video-container">
                <img src={c2Img} />
                <video className="hover-video" autoPlay muted loop playsInline>
                  <source src={c2Video} type="video/mp4" />
                </video>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] bg-yellow-500 text-black font-bold px-2 py-0.5">
                      HEAVY
                    </span>
                    <h3 className="text-2xl font-bold font-orbitron mt-1">
                      TITAN
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500">POWER LEVEL</span>
                    <div className="text-yellow-400 font-orbitron">S-RANK</div>
                  </div>
                </div>
                <div className="chart-box flex justify-center">
                  <canvas ref={chart3Ref}></canvas>
                </div>
                <p className="text-gray-500 text-xs mt-4 leading-relaxed">
                  點擊查看詳細活動資訊與專屬獎勵內容...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: 最新消息 */}
      <News />
    </>
  );
}

export default Hero;
