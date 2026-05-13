import { useNavigate } from "react-router-dom";
import heroVideo from "../assets/v2_watermarked-3c685133-00f7-4f10-8dd0-9f94dbbd4833.mp4";

function Characters1() {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 min-h-screen bg-gradient-to-b from-cyan-900 via-slate-950 to-black text-white pt-[140px] px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* 返回按鈕 */}
        <button
          onClick={() => navigate("/")}
          className="mb-10 p-4 text-cyan-400 hover:text-white transition"
        >
          ← 返回名錄
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 左側影片 */}
          <div className="rounded-2xl overflow-hidden border border-cyan-500/30 bg-white/5">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>

          {/* 右側資訊 */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-bold bg-cyan-400 text-black mb-4">
              VANGUARD
            </span>

            <h1 className="!text-5xl !md:text-7xl !font-black font-orbitron mb-6">
              AETHER
            </h1>

            <p className="text-cyan-400 text-lg font-bold mb-8">
              專屬活動：星核共鳴實驗
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">活動內容</h3>

              <p className="text-gray-400 leading-relaxed">
                完成每日任務即可領取 AETHER 專屬強化素材，
                累積活動積分可解鎖限定時裝「虛空之影」、 SSR
                武器模組與限定稱號。
              </p>
            </div>
            {/* 能力值 */}
            <div className="space-y-4 m-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>攻擊</span>
                  <span className="text-cyan-400">95</span>
                </div>

                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-cyan-400"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>機動</span>
                  <span className="text-cyan-400">85</span>
                </div>

                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-cyan-400"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>生命</span>
                  <span className="text-cyan-400">75</span>
                </div>

                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[75%] bg-cyan-400"></div>
                </div>
              </div>
            </div>

            <button className="w-full mt-10 py-4 bg-cyan-400 text-black font-black rounded-xl hover:bg-white transition">
              立即參加活動
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Characters1;
