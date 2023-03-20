import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccountDetailsPage from '../../features/transaction/TransactionOverviewPage';
import AccountOverviewPage from '../../features/account/AccountOverviewPage';
import LoginPage from '../../features/user/LoginPage';
import LoadingIndicator from '../components/Loading/LoadingIndicator';
import { useAppDispatch } from '../store/hooks';
import { fetchCurrentUser } from '../store/users/action';
import { NOT_FOUND } from '../utilities/constant';
import { ROUTE_NAME, USER_FORM } from '../utilities/enums';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  const initApp = useCallback(
    async () => {
      try {
        await dispatch(fetchCurrentUser());
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch],
  )

  useEffect(
    () => { initApp().then(() => setLoading(false)); },
    [initApp],
  )

  if (loading) return <LoadingIndicator />

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_NAME.LOGIN} element={<LoginPage formType={USER_FORM.LOGIN} />} />
        <Route path={ROUTE_NAME.REGISTER} element={<LoginPage formType={USER_FORM.REGISTER} />} />
        <Route path={ROUTE_NAME.ACCOUNT} element={<PrivateRoute />} >
          <Route path={ROUTE_NAME.ACCOUNT} element={<AccountOverviewPage />} />
          <Route path={ROUTE_NAME.ACCOUNT_DETAILS} element={<AccountDetailsPage />} />
          <Route path={ROUTE_NAME.ALL} element={<h1>{NOT_FOUND}</h1>} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;

