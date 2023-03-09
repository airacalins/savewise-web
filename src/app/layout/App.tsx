import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccountDetailsPage from '../../features/account/AccountDetailsPage';
import AccountOverviewPage from '../../features/account/AccountOverviewPage';
import HomeOverviewPage from '../../features/home/HomeOverviewPage';
import TransactionOverviewPage from '../../features/transaction/TransactionOverviewPage';
import LoginPage from '../../features/user/LoginPage';
import LoadingIndicator from '../components/Loading/LoadingIndicator';
import { useAppDispatch } from '../store/hooks';
import { fetchCurrentUser } from '../store/users/action';
import { NOT_FOUND } from '../utilities/constant';
import { ROUTE, USER_FORM } from '../utilities/enums';
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
        <Route path={ROUTE.LOGIN} element={<LoginPage formType={USER_FORM.LOGIN} />} />
        <Route path={ROUTE.REGISTER} element={<LoginPage formType={USER_FORM.REGISTER} />} />
        <Route path={ROUTE.HOME} element={<PrivateRoute />} >
          <Route path={ROUTE.ACCOUNT} element={<AccountOverviewPage />} />
          <Route path={ROUTE.ACCOUNT_DETAILS} element={<AccountDetailsPage />} />
          <Route path={ROUTE.HOME} element={<HomeOverviewPage />} />
          <Route path={ROUTE.TRANSACTION} element={<TransactionOverviewPage />} />
          <Route path={ROUTE.ALL} element={<h1>{NOT_FOUND}</h1>} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;

