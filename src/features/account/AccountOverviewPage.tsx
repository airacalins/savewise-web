import { useEffect } from "react";
import { fetchAccount, fetchAccounts } from "../../app/store/accounts/action";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";

const AccountOverviewPage = () => {

  const dispatch = useAppDispatch();
  const { isFetching, accounts } = useAppSelector(state => state.account)

  useEffect(() => {
    dispatch(fetchAccounts());
  }, []);

  if (isFetching) return <h1>LOADING</h1>

  return <div>
    {accounts.map(account => <small>{account.title}</small>)}
  </div>
}

export default AccountOverviewPage;