import Spinner from 'react-bootstrap/Spinner';

function LoadingIndicator() {
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
      <Spinner
        animation="border"
        role="status"
      />
    </div>
  );
}

export default LoadingIndicator;