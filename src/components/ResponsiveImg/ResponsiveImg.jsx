import PropTypes from 'prop-types';

const ResponsiveImg = ({ settings: { jpg, webp, src, alt } }) => {
  return (
    <picture style={{
      display: "block",
      height: "100%",
    }}>
      <source srcSet={`${jpg.x1} 1x, ${jpg.x2} 2x`} type="image/webp" />
      <source srcSet={`${webp.x2} 1x, ${webp.x2} 2x`} type="image/jpeg" />
      <img src={src} alt={alt} />
    </picture>
  );
}

export default ResponsiveImg;

ResponsiveImg.propTypes = {
  settings: PropTypes.shape({
    jpg: PropTypes.object.isRequired,
    webp: PropTypes.object.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
}