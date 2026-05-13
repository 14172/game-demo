import { useNavigate } from "react-router-dom";
import c2Video from "../assets/c2.mp4";
import AnimatedProgress from "../components/AnimatedProgress";

function Characters3() {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 min-h-screen bg-gradient-to-b from-yellow-700 via-stone-950 to-black text-white pt-[140px] px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* 返回按鈕 */}
        <button
          onClick={() => navigate("/")}
          className="mb-10 p-4 text-yellow-400 hover:text-white transition"
        >
          ← 返回名錄
        </button>

        {/* 主內容 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* 左側影片 */}
          <div className="rounded-2xl overflow-hidden border border-purple-500/30 bg-white/5">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={c2Video} type="video/mp4" />
            </video>
          </div>

          {/* 右側資訊 */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-bold bg-yellow-500 text-black mb-4">
              HEAVY
            </span>

            <h1 className="text-5xl md:text-7xl font-black font-orbitron mb-6">
              TITAN
            </h1>

            <p className="text-yellow-400 text-lg font-bold mb-8">
              專屬活動：重裝殲滅協議
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">活動內容</h3>

              <p className="text-gray-400 leading-relaxed">
                參與大型殲滅作戰，挑戰巨型機械軍團， 完成任務可獲得 TITAN
                專屬重裝外觀、 高階武裝核心與限定徽章。
              </p>
            </div>

            {/* 能力值 */}
             <div className="space-y-4 m-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>攻擊</span>
                  <span className="text-yellow-400">95</span>
                </div>

                <AnimatedProgress targetProgress={95} color="yellow"/>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>機動</span>
                  <span className="text-yellow-400">85</span>
                </div>

                <AnimatedProgress targetProgress={85} color="yellow"/>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>生命</span>
                  <span className="text-yellow-400">75</span>
                </div>

                <AnimatedProgress targetProgress={75} color="yellow"/>
              </div>
            </div>

            {/* 按鈕 */}
            <button className="w-full mt-5 py-4 rounded-pill bg-yellow-500 text-black font-black rounded-xl hover:bg-yellow-400 transition">
              進入殲滅作戰
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Characters3;
