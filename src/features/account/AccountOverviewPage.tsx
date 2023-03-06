import { useEffect } from "react";
import NavigationContainer from "../../app/components/Navigation/NavigationContainer";
import { fetchAccount, fetchAccounts } from "../../app/store/accounts/action";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";

const AccountOverviewPage = () => {

  const dispatch = useAppDispatch();
  const { isFetching, accounts } = useAppSelector(state => state.account)

  useEffect(() => {
    dispatch(fetchAccounts());
  }, []);

  if (isFetching) return <h1>LOADING</h1>

  return (
    <NavigationContainer children={
      <>
        {accounts.map(account =>
          <small>
            {account.title}
          </small>
        )}
      </>
    } />
  )


}

export default AccountOverviewPage;