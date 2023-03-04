import { ToastContainer } from 'react-toastify';
import AccountOverviewPage from '../../features/account/AccountOverviewPage';
import TestErrorPage from "../../features/errors/TestErrorPage";

const App = () => {
  return (
    <>
      <AccountOverviewPage />
      <TestErrorPage />
    </>
  );
}

export default App;
