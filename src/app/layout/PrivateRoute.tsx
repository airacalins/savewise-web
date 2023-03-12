import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { ROUTE_NAME } from "../utilities/enums";
import PrivateLayout from "./PrivateLayout";

const PrivateRoute = () => {
  const { currentUser } = useAppSelector(state => state.user)

  return !!currentUser ? <PrivateLayout /> : <Navigate to={ROUTE_NAME.LOGIN} />
}

export default PrivateRoute;
