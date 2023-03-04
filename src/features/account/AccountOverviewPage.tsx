import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { Account } from "../../app/models/account";

const AccountOverviewPage = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    agent.Accounts.list().then(response => {
      setAccounts(response);
    })
  }, []);

  return <div>
    {accounts.map(account => <small>{account.title}</small>)}
  </div>
}

export default AccountOverviewPage;