import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* 桌面版導覽列 */}
      <nav
        className="
          navbar
          navbar-expand-md
          fixed-top
          glass-card
          border-top-0
          border-start-0
          border-end-0
          px-3
          py-3
        "
      >
        <div className="container-fluid">
          {/* Logo */}
          <Link
            to="/"
            className="
              navbar-brand
              logo-link
              text-cyan-400
              font-orbitron
              fw-bold
              fs-3
            "
          >
            PROJECT NOVA
          </Link>

          {/* 漢堡選單 */}
          <button
            className="
              navbar-toggler
              border-0
              shadow-none
            "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* 桌面版導覽列 */}
          <div
            className="
              d-none
              d-md-flex
              align-items-center
              ms-auto
              p-4
            "
          >
            <div className="navbar-nav gap-4 fw-bold">
              <a className="nav-link text-white" href="#hero">
                首頁
              </a>

              <a className="nav-link text-white" href="#chars">
                角色情報
              </a>

              <a className="nav-link text-white" href="#rewards">
                預約獎勵
              </a>

              <a className="nav-link text-white" href="#news">
                最新消息
              </a>
            </div>
          </div>

          <button
            className="
              btn
              btn-info
              fw-bold
              px-4
              d-none
              d-md-block
            "
          >
            立即下載
          </button>
        </div>
      </nav>

      {/* 手機版導覽列 */}
      <div
        className="
          offcanvas
          offcanvas-end
          d-md-none
          logo-text
        "
        tabIndex="-1"
        id="mobileMenu"
      >
        <div className="offcanvas-header">
          <h5
            className="
              offcanvas-title
              font-orbitron
              text-cyan-400
            "
          >
            PROJECT NOVA
          </h5>

          <button
            type="button"
            className="
              btn-close
              btn-close-white
            "
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <div className="d-flex flex-column gap-4 fw-bold">
            <a
              className="
                nav-link
                text-decoration-none
                text-white
              "
              href="#hero"
              data-bs-dismiss="offcanvas"
            >
              首頁
            </a>

            <a
              className="
                nav-link
                text-decoration-none
                text-white
              "
              href="#chars"
              data-bs-dismiss="offcanvas"
            >
              角色情報
            </a>

            <a
              className="
                nav-link
                text-decoration-none
                text-white
              "
              href="#rewards"
              data-bs-dismiss="offcanvas"
            >
              預約獎勵
            </a>

            <a
              className="
                nav-link
                text-decoration-none
                text-white
              "
              href="#news"
              data-bs-dismiss="offcanvas"
            >
              最新消息
            </a>
          </div>

          <button
            className="
              btn
              btn-info
              w-100
              rounded-pill
              fw-bold
              mt-5
            "
          >
            立即下載
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
