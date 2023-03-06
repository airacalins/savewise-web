import { navigationPaths } from "../../utilities/constant";
import NavigationBar from "./NavigationBar";

interface Props {
  children: JSX.Element
}

const NavigationContainer = ({ children }: Props) => {
  return (
    <div className="vh-100">
      <NavigationBar navigationPaths={navigationPaths} />
      <div className="pt-5">
        {children}
      </div>
    </div>
  )
}

export default NavigationContainer;