const SectionHeader = ({ index, label, title, titleId, children }) => (
  <header className="section-head" data-reveal>
    <p className="eyebrow">
      <span className="eyebrow__index">{index}</span>
      <span>{label}</span>
      <span className="eyebrow__line" aria-hidden="true" />
    </p>
    <h2 className="section-title" id={titleId}>
      <span className="section-title__inner">{title}</span>
    </h2>
    {children && <p className="section-intro">{children}</p>}
  </header>
);

export default SectionHeader;
