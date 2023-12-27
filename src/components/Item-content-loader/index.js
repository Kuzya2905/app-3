import ContentLoader from "react-content-loader";

function ItemContentLoader() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="24" y="281" rx="11" ry="11" width="218" height="32" />
      <rect x="2" y="327" rx="8" ry="8" width="262" height="67" />
      <rect x="4" y="409" rx="12" ry="12" width="76" height="30" />
      <rect x="126" y="408" rx="12" ry="12" width="136" height="31" />
      <rect x="239" y="383" rx="0" ry="0" width="1" height="2" />
      <circle cx="132" cy="132" r="124" />
    </ContentLoader>
  );
}

export default ItemContentLoader;
