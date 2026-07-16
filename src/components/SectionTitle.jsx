function SectionTitle({ title, subtitle, center = true }) {
  return (
    <div className={center ? "text-center mb-16" : "mb-16"}>
      <p className="text-cyan-400 uppercase tracking-[6px] font-semibold mb-3">
        {title}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        {subtitle}
      </h2>
    </div>
  );
}

export default SectionTitle;