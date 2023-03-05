import { ToastContainer } from 'react-toastify';
import AccountOverviewPage from '../../features/account/AccountOverviewPage';
import TestErrorPage from "../../features/errors/TestErrorPage";
import LoginPage from '../../features/user/LoginPage';

const App = () => {
  return (
    // <>
    //   <AccountOverviewPage />
    //   <TestErrorPage />
    // </>
    <LoginPage />
  );
}

export default App;
