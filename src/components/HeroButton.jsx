function HeroButton({
  children,
  variant = 'primary',
  icon,
  onClick
}) {

  return (

    <button
      onClick={onClick}
      className={`
        hero-btn
        ${
          variant === 'primary'
            ? 'btn-neon'
            : 'border border-white/20 hover:bg-white/10 transition'
        }
      `}
    >

      {icon && (
        <span className="play-icon">
          {icon}
        </span>
      )}

      {children}

    </button>

  )

}

export default HeroButton