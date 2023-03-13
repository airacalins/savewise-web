import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormGroup from "../../app/components/Form/FormGroup";
import LoadingIndicator from "../../app/components/Loading/LoadingIndicator";
import { createAccount, fetchAccounts } from "../../app/store/accounts/action";
import { Account, CreateAccountInput } from "../../app/store/accounts/types";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { ADD_ACCOUNT, EMPTY_STRING, SEE_DETAILS, TITLE } from "../../app/utilities/constant";
import { FORM_TYPE, ROUTE_NAME, VARIANT } from "../../app/utilities/enums";

const AccountOverviewPage = () => {
  const dispatch = useAppDispatch();
  const { isFetching, accounts } = useAppSelector(state => state.account)

  const navigate = useNavigate();

  const [createAccountInput, setCreateAccountInput] = useState<CreateAccountInput>({
    title: EMPTY_STRING,
  })

  useEffect(() => {
    dispatch(fetchAccounts());
  }, []);

  const handleShowDetails = (account: Account) => navigate(`${ROUTE_NAME.ACCOUNT}/${account.id}`);

  const handleCreateAccount = async () => {
    await dispatch(createAccount(createAccountInput))
    await dispatch(fetchAccounts())
  }

  if (isFetching) return <LoadingIndicator />

  return (
    <>
      <Form className="mb-5">
        <Row>
          <Col md={{ span: 9 }}>
            <FormGroup
              placeholder={TITLE}
              type={FORM_TYPE.TEXT}
              margin="m-0"
              onChange={(value) => setCreateAccountInput(_ => ({ title: value }))}
            />
          </Col>

          <Col md={{ span: 3 }}>
            <Button
              variant={VARIANT.DARK}
              className="py-3 px-5 w-100"
              onClick={handleCreateAccount}
            >
              {ADD_ACCOUNT}
            </Button>
          </Col>
        </Row>
      </Form>

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