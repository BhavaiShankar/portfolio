function Button({
  children,
  variant = "primary",
  onClick,
  href,
}) {
  const baseClasses =
  "inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap";
  const variants = {
    primary:
      "bg-cyan-500 text-white px-5 py-2.5 rounded-lg font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300",

    outline:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white",
  };

  const classes = `${baseClasses} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;