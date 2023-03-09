import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../../app/components/Loading/LoadingIndicator";
import { fetchAccounts } from "../../app/store/accounts/action";
import { Account } from "../../app/store/accounts/types";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { ADD_ACCOUNT, CREATE_ACCOUNT, SEE_DETAILS } from "../../app/utilities/constant";
import { ROUTE, VARIANT } from "../../app/utilities/enums";

const AccountOverviewPage = () => {

  const [isCreateAccount, setIsCreateAccount] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { isFetching, accounts } = useAppSelector(state => state.account)

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAccounts());
  }, []);

  const handleShowDetails = (account: Account) => navigate(`${ROUTE.ACCOUNT}/${account.id}`);

  const handleShowAccountFrom = () => setIsCreateAccount(!isCreateAccount);

  if (isFetching) return <LoadingIndicator />

  return (
    <>
      {
        !isCreateAccount && <Button
          variant={VARIANT.DARK}
          className="w-100 mb-3"
          style={{ height: 64 }}
          onClick={handleShowAccountFrom}
        >
          {CREATE_ACCOUNT}
        </Button>
      }

      {
        isCreateAccount &&
        <Form className="d-flex mb-3">
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
          <Card className="mb-3">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <Card.Title className="card-title">
                  {account.title}
                </Card.Title>

                <Card.Text className="card-text">
                  {account.balance}
                </Card.Text>
              </div>

              <Button
                onClick={() => handleShowDetails(account)}
                variant={VARIANT.DARK}
              >
                {SEE_DETAILS}
              </Button>
            </Card.Body>
          </Card>
        )
      }
    </>
  )
}

export default AccountOverviewPage;