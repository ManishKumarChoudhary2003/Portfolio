function PageContent({ children }) {
  return (
    <main id="main" tabIndex={-1}>
      {children}
    </main>
  );
}

export default PageContent;
