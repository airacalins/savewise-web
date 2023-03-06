import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavigationPath } from '../../models/navigation_path';
import { APP_NAME } from '../../utilities/constant';
import { VARIANT } from '../../utilities/enums';

interface Props {
  navigationPaths: NavigationPath[];
}

const NavigationBar = ({ navigationPaths }: Props) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={VARIANT.DARK}
      variant={VARIANT.DARK}
      className="px-5"
      fixed="top"
    >
      <Navbar.Brand>{APP_NAME}</Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">

          {
            navigationPaths.map(nav => {
              const { title, path } = nav;

              return <Nav.Link href={path} className="px-4">
                {title}
              </Nav.Link>;
            })
          }

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;