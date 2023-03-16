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

  const [selectedAccount, setSelectedAccount] = useState<Account>();

  useEffect(
    () => {
      dispatch(fetchAccounts());
      console.log('f', selectedAccount);
    },
    [],
  );

  const handleShowDetails = (account: Account) => navigate(`${ROUTE_NAME.ACCOUNT}/${account.id}`);

  const handleCreateFormShow = () => setSelectedAccount(undefined);

  const handleEditFormShow = (account: Account) => setSelectedAccount(account);

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
          {!!selectedAccount &&
            <div className="mb-3 d-flex align-items-center">
              <Button
                variant={VARIANT.DARK}
                onClick={handleCreateFormShow}
              >
                +
              </Button>

              <h5 className="ms-2 m-0">{CREATE_ACCOUNT}</h5>
            </div>
          }

          {
            accounts.map(account =>
              <Card key={account.id} className="mb-3">
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
                      onClick={() => handleEditFormShow(account)}
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
            <Card className="px-3 py-5">
              <h3 className="mb-5">
                {selectedAccount ? EDIT_ACCOUNT : CREATE_ACCOUNT}
              </h3>

              <Form>
                <FormGroup
                  placeholder={TITLE}
                  type={FORM_TYPE.TEXT}
                  value={selectedAccount != undefined ? selectedAccount.title : EMPTY_STRING}
                  onChange={(value) => selectedAccount
                    ? setUpdateAccountInput((_) => ({ id: selectedAccount.id, title: value }))
                    : setCreateAccountInput((_) => ({ title: value }))
                  }
                />

                <Button
                  type="submit"
                  variant={VARIANT.DARK}
                  className="py-3 px-5 w-100"
                  onClick={selectedAccount != undefined ? handleUpdateAccount : handleCreateAccount}
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