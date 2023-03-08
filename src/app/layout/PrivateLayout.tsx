import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import NavigationBar from "../components/Navigation/NavigationBar"
import { navigationPaths } from "../utilities/constant"

const PrivateLayout = () => {
  return (
    <div className="vh-100">
      <NavigationBar navigationPaths={navigationPaths} />

      <Container className="mt-5 py-5">
        <Outlet />
      </Container>
    </div>
  )

}

export default PrivateLayout