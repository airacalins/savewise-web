import { Route, Routes } from 'react-router-dom';
import AccountOverviewPage from '../../features/account/AccountOverviewPage';
import HomeOverviewPage from '../../features/home/HomeOverviewPage';
import TransactionOverviewPage from '../../features/transaction/TransactionOverviewPage';
import LoginPage from '../../features/user/LoginPage';
import { FORM_TYPE, PATH_NAME, USER_FORM } from '../utilities/enums';

const App = () => {
  return (
    <Routes>
      <Route path={PATH_NAME.ACCOUNT} element={<AccountOverviewPage />} />
      <Route path={PATH_NAME.HOME} element={<HomeOverviewPage />} />
      <Route path={PATH_NAME.TRANSACTION} element={<TransactionOverviewPage />} />
      <Route path={PATH_NAME.LOGIN} element={<LoginPage formType={USER_FORM.LOGIN} />} />
      <Route path={PATH_NAME.REGISTER} element={<LoginPage formType={USER_FORM.REGISTER} />} />
    </Routes>
  );
}

export default App;

