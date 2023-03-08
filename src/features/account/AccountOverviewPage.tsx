import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../../app/components/Loading/LoadingIndicator";
import { fetchAccounts } from "../../app/store/accounts/action";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { ADD_ACCOUNT, SEE_DETAILS } from "../../app/utilities/constant";
import { ROUTE, VARIANT } from "../../app/utilities/enums";

const AccountOverviewPage = () => {

  const [isCreateAccount, setIsCreateAccount] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { isFetching, accounts } = useAppSelector(state => state.account)

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAccounts());
  }, []);

  if (isFetching) return <LoadingIndicator />

  return (
    <>
      {
        !isCreateAccount && <Button
          variant={VARIANT.DARK}
          className="w-100 mb-3"
          style={{ height: 64 }}
          onClick={() => setIsCreateAccount(false)}
        >
          CREATE ACCOUNT
        </Button>
      }

      {
        isCreateAccount && <Form className="d-flex mb-3">
          <Form.Group className="w-75">
            <Form.Control
              type="email"
              placeholder="Title"
              className="py-3"
            />
          </Form.Group>

          <Button
            variant={VARIANT.DARK}
            className="w-25 ms-3"
          >
            {ADD_ACCOUNT}
          </Button>
        </Form>
      }


      {
        accounts.map(account =>
          <div className="card mb-3">
            <div className="card-body d-flex align-items-center justify-content-between">
              <div>
                <h5 className="card-title">
                  {account.title}
                </h5>

                <p className="card-text">
                  {account.balance}
                </p>
              </div>

              <Button
                onClick={() => navigate(`${ROUTE.ACCOUNT}/${account.id}`)}
                variant={VARIANT.DARK}
              >
                {SEE_DETAILS}
              </Button>
            </div>
          </div>
        )
      }
    </>
  )
}

export default AccountOverviewPage;