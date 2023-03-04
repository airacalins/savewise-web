import axios from 'axios';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import ValidationError from './ValidationError';

const TestErrorPage = () => {
  const [errors, setErrors] = useState<string[]>([]);

  const baseUrl = 'http://localhost:5000/api/'

  function handleNotFound() {
    axios.get(baseUrl + 'buggy/not-found').catch(err => console.log(err.response));
  }

  function handleBadRequest() {
    axios.get(baseUrl + 'buggy/bad-request').catch(err => console.log(err.response));
  }

  function handleServerError() {
    axios.get(baseUrl + 'buggy/server-error').catch(err => console.log(err.response));
  }

  function handleValidationError() {
    axios
      .post(baseUrl + 'accounts/00fc70c1-24b9-4350-a28e-13bf98331da8/Transactions', {})
      .catch(err => setErrors([err.response.data]));
  }

  function handleUnauthorised() {
    axios.get(baseUrl + 'buggy/unauthorised').catch(err => console.log(err.response));
  }

  function handleBadGuid() {
    axios.get(baseUrl + 'accounts/notaguid').catch(err => console.log(err.response));
  }

  return (
    <Container>
      <h1>Test Error Component</h1>
      <Button variant="primary" onClick={handleNotFound}>Not Found</Button>
      <Button variant="primary" onClick={handleBadRequest}>Bad Request</Button>
      <Button variant="primary" onClick={handleValidationError}>Validation Error</Button>
      <Button variant="primary" onClick={handleServerError}>Server Error</Button>
      <Button variant="primary" onClick={handleUnauthorised}>Unauthorized</Button>
      <Button variant="primary" onClick={handleBadGuid}>Bad Guid</Button>

      {errors && <ValidationError errors={errors} />}
    </Container>
  )
}

export default TestErrorPage;


