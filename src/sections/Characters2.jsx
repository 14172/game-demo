import { useNavigate } from "react-router-dom";
import c1Video from "../assets/c1.mp4";

function Characters2() {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 min-h-screen bg-gradient-to-b from-purple-900 via-slate-950 to-black text-white pt-[140px] px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* 返回按鈕 */}
        <button
          onClick={() => navigate("/")}
          className="mb-10 p-4 text-purple-400 hover:text-white transition"
        >
          ← 返回名錄
        </button>

        {/* 主內容 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 左側影片 */}
          <div className="rounded-2xl overflow-hidden border border-purple-500/30 bg-white/5">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={c1Video} type="video/mp4" />
            </video>
          </div>

          {/* 右側資訊 */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-bold bg-purple-500 text-white mb-4">
              HACKER
            </span>

            <h1 className="text-5xl md:text-7xl font-black font-orbitron mb-6">
              CYRA
            </h1>

            <p className="text-purple-400 text-lg font-bold mb-8">
              專屬活動：量子滲透作戰
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">活動內容</h3>

              <p className="text-gray-400 leading-relaxed">
                參與駭客攻防戰模式，破解敵方量子防火牆，
                即可獲得限定稱號、虛擬貨幣與 CYRA 專屬塗裝。
              </p>
            </div>

            {/* 能力值 */}
            <div className="space-y-4 m-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>駭入</span>
                  <span className="text-purple-400">98</span>
                </div>

                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[98%] bg-purple-400"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>機動</span>
                  <span className="text-purple-400">90</span>
                </div>

                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-purple-400"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>防禦</span>
                  <span className="text-purple-400">45</span>
                </div>

                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[45%] bg-purple-400"></div>
                </div>
              </div>
            </div>

            {/* 按鈕 */}
            <button className="w-full mt-10 py-4 bg-purple-500 text-white font-black rounded-xl hover:bg-purple-400 transition">
              開始滲透任務
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Characters2;
