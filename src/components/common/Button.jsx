function Button({
  children,
  variant = "primary",
  onClick,
  href,
}) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-cyan-500 hover:bg-cyan-600 text-white",

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