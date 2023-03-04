import { ToastContainer } from 'react-toastify';
import AccountOverviewPage from '../../features/account/AccountOverviewPage';
import TestErrorPage from "../../features/errors/TestErrorPage";

const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        // autoClose={5000}
        hideProgressBar
        theme="colored"
      />

      <AccountOverviewPage />
      <TestErrorPage />
    </>
  );
}

export default App;
