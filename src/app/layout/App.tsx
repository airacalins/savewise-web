import { useCallback, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import AccountOverviewPage from '../../features/account/AccountOverviewPage';
import TestErrorPage from "../../features/errors/TestErrorPage";
import LoginPage from '../../features/user/LoginPage';
import { useAppDispatch } from '../store/hooks';
import { fetchCurrentUser } from '../store/users/action';

const App = () => {

  const dispatch = useAppDispatch();
  const user = useAppSelecter(state => state.user);

  const [loading, setLoading] = useState(true);

  const initApp = useCallback(
    async () => {
      try {
        await dispatch(fetchCurrentUser());
      } catch (error) {
        console.log(error);
      }
    }, [dispatch])

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp])

  return (
    // <>
    //   <AccountOverviewPage />
    //   <TestErrorPage />
    // </>
    <LoginPage />
  );
}

export default App;
function useAppSelecter(arg0: (state: any) => any) {
  throw new Error('Function not implemented.');
}

