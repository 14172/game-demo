function News() {
  return (
    <section id="news" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 font-orbitron">INTEL & NEWS</h2>
      </div>

      <div className="space-y-4">
        <div className="glass-card p-4 flex items-center justify-between hover:bg-white/5 cursor-pointer" 
        data-aos="fade-down"
        data-aos-delay="0"
        >
          <div className="flex items-center">
            <span className="bg-gray-700 text-[10px] px-2 py-1 rounded mr-4">
              公告
            </span>

            <span className="text-sm font-medium">
              《Project NOVA》首部實機演示預告片公開！
            </span>
          </div>

          <span className="text-gray-500 text-xs">2026.05.20</span>
        </div>

        <div className="glass-card p-4 flex items-center justify-between hover:bg-white/5 cursor-pointer" data-aos="fade-down"  data-aos-delay="150"
>
          <div className="flex items-center">
            <span className="bg-cyan-900 text-cyan-300 text-[10px] px-2 py-1 rounded mr-4">
              活動
            </span>

            <span className="text-sm font-medium">
              分享活動頁抽 PS5！事前登錄加碼中
            </span>
          </div>

          <span className="text-gray-500 text-xs">2026.05.18</span>
        </div>

        <div className="glass-card p-4 flex items-center justify-between hover:bg-white/5 cursor-pointer" data-aos="fade-down" data-aos-delay="300">
          <div className="flex items-center">
            <span className="bg-purple-900 text-purple-300 text-[10px] px-2 py-1 rounded mr-4">
              系統
            </span>

            <span className="text-sm font-medium">
              角色戰鬥機制詳解：納米共鳴系統
            </span>
          </div>

          <span className="text-gray-500 text-xs">2026.05.15</span>
        </div>
      </div>
    </section>
  );
}

export default News;
