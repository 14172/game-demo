function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-black text-center">

      <div className="text-xl font-black font-orbitron mb-6 text-gray-500">
        PROJECT NOVA
      </div>

      <div className="flex justify-center space-x-6 mb-8">
        <a
          href="#"
          className="text-gray-400 no-underline hover:text-white transition"
        >
          Facebook
        </a>

        <a
          href="#"
          className="text-gray-400 no-underline hover:text-white transition"
        >
          Discord
        </a>

        <a
          href="#"
          className="text-gray-400 no-underline hover:text-white transition"
        >
          Instagram
        </a>

        <a
          href="#"
          className="text-gray-400 no-underline hover:text-white transition"
        >
          YouTube
        </a>
      </div>

      <div className="text-xs text-gray-600 space-y-2">

        <p>© 2026 NOVA STUDIO ALL RIGHTS RESERVED.</p>

        <p>
          本遊戲為虛構主題，僅作為面試作品集 Demo 使用。
        </p>

        <div className="pt-4 flex justify-center space-x-4">

          <a
            href="#"
            className="text-gray-500 no-underline hover:text-white transition"
          >
            隱私權政策
          </a>

          <a
            href="#"
            className="text-gray-500 no-underline hover:text-white transition"
          >
            使用者條款
          </a>

          <a
            href="#"
            className="text-gray-500 no-underline hover:text-white transition"
          >
            分級規範
          </a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;