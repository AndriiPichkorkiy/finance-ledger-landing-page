const ResponsiveImg = ({ settings: { jpg, webp, src, alt } }) => {
  return (
    <picture>
      <source srcSet={`${jpg.x1} 1x, ${jpg.x2} 2x`} type="image/webp" />
      <source srcSet={`${webp.x2} 1x, ${webp.x2} 2x`} type="image/jpeg" />
      <img src={src} alt={alt} />
    </picture>
  );
}

export default ResponsiveImg;