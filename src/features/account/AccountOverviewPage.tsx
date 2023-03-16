import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormGroup from "../../app/components/Form/FormGroup";
import LoadingIndicator from "../../app/components/Loading/LoadingIndicator";
import { createAccount, fetchAccounts, updateAccount } from "../../app/store/accounts/action";
import { Account, CreateAccountInput, UpdateAccountInput } from "../../app/store/accounts/types";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { ADD_ACCOUNT, CREATE_ACCOUNT, EDIT, EDIT_ACCOUNT, EMPTY_STRING, SHOW, TITLE } from "../../app/utilities/constant";
import { FORM_TYPE, ROUTE_NAME, VARIANT } from "../../app/utilities/enums";

const AccountOverviewPage = () => {
  const dispatch = useAppDispatch();
  const { isFetching, accounts } = useAppSelector(state => state.account)

  const navigate = useNavigate();

  const [createAccountInput, setCreateAccountInput] = useState<CreateAccountInput>({
    title: EMPTY_STRING,
  })

  const [updateAccountInput, setUpdateAccountInput] = useState<UpdateAccountInput>({
    id: EMPTY_STRING,
    title: EMPTY_STRING,
  })

  const [isCreatingAccount, setIsCreatingAccount] = useState(false)

  const [selectedAccount, setSelectedAccount] = useState<Account>();

  useEffect(() => {
    dispatch(fetchAccounts());
  }, []);

  const handleShowDetails = (account: Account) => navigate(`${ROUTE_NAME.ACCOUNT}/${account.id}`);

  const handleCreateAccount = async () => {
    await dispatch(createAccount(createAccountInput));
    await dispatch(fetchAccounts());
  }

  const handleUpdateAccount = async () => {
    await dispatch(updateAccount(updateAccountInput));
    await dispatch(fetchAccounts());
  }

  if (isFetching) return <LoadingIndicator />

  return (
    <>
      <Row>
        <Col>
          <div className="mb-3">
            <Button
              variant={VARIANT.DARK}
              onClick={() => {
                setIsCreatingAccount(true);
                setSelectedAccount(undefined)
              }}
            >
              +
            </Button>

            <small className="ms-2">Create Account</small>
          </div>
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
                  <div>
                    <Button
                      onClick={() => {
                        setSelectedAccount(account);
                        handleUpdateAccount();
                      }}
                      variant={VARIANT.DARK}
                      className="me-2"
                    >
                      {EDIT}
                    </Button>

                    <Button
                      onClick={() => handleShowDetails(account)}
                      variant={VARIANT.DARK}
                    >
                      {SHOW}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            )
          }
        </Col>

        <Col md={{ span: 4 }}>
          {
            isCreatingAccount && <Card className="px-3 py-5">
              <h3 className="mb-5">
                {selectedAccount == null && isCreatingAccount ? CREATE_ACCOUNT : EDIT_ACCOUNT}
              </h3>

              <Form>
                <FormGroup
                  placeholder={TITLE}
                  type={FORM_TYPE.TEXT}
                  value={selectedAccount != undefined ? selectedAccount.title : EMPTY_STRING}
                  onChange={(value) => setCreateAccountInput(_ => ({ title: value }))}
                />

                <Button
                  variant={VARIANT.DARK}
                  className="py-3 px-5 w-100"
                  onClick={handleCreateAccount}
                >
                  {selectedAccount != undefined ? EDIT_ACCOUNT : ADD_ACCOUNT}
                </Button>
              </Form>
            </Card>
          }
        </Col>
      </Row>
    </>
  )
}

export default AccountOverviewPage;