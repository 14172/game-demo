function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center">

      <h1 className="font-orbitron text-5xl font-black text-cyan-400 mb-6 tracking-[0.3em]">
        PROJECT NOVA
      </h1>

      <div className="w-64 h-[2px] bg-white/10 overflow-hidden">
        <div className="loading-bar"></div>
      </div>

      <p className="text-gray-500 mt-6 tracking-[0.2em] text-sm">
        INITIALIZING SYSTEM...
      </p>

    </div>
  );
}

export default LoadingScreen;