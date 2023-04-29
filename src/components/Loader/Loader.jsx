import loader from '../../assests/images/gallery/loading.gif'
import { LoaderContainer, LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderWrapper>
        <img src={loader} width="100%" height="100%" />
      </LoaderWrapper>
    </LoaderContainer>
  );
}

export default Loader;