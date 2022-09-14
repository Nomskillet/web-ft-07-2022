import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample({brandLink, brandText, brandDescription}) {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">{brandLink}</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>{brandText}</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            {brandDescription}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;