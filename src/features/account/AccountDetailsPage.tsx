import { useEffect } from "react";
import { Button, Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FormGroup from "../../app/components/Form/FormGroup";
import Loading from "../../app/components/Loading/LoadingIndicator";
import { fetchAccount } from "../../app/store/accounts/action";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { fetchTransactions } from "../../app/store/transactions/action";
import { ACCOUNT_CREATED, ADD_TRANSACTION, BALANCE, CREATE, EXPENSE, INCOME, NO_TRANSACTIONS, TITLE, TRANSACTIONS } from "../../app/utilities/constant";
import { FORM_TYPE, VARIANT } from "../../app/utilities/enums";

const AccountDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { isFetching: isFetchingAccount, account } = useAppSelector(state => state.account)
  const { isFetching: isFetchingTransactions, transactions } = useAppSelector(state => state.transaction)

  const { id } = useParams();

  const fetchAccountTransactions = async () => {
    if (!!!id) return console.log("Not found");
    await dispatch(fetchAccount({ id }));
    await dispatch(fetchTransactions({ accountId: id }));
  }

  useEffect(() => {
    fetchAccountTransactions();
  }, [id])

  if (isFetchingAccount && isFetchingTransactions) return <Loading />

  return (
    <Row>
      <Col md={{ span: 8 }}>
        <h3>{TRANSACTIONS}</h3>
        {transactions.length == 0 && <h1>{NO_TRANSACTIONS}</h1>}
        {transactions.map(transaction => <h1>{transaction.amount}</h1>)}
      </Col>

      <Col md={{ span: 4 }}>
        <Card>
          <Card.Title className="p-3">
            {account?.title}
          </Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex justify-content-between">
              <div>{ACCOUNT_CREATED}</div>
              <div>{account?.balance}</div>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex justify-content-between">
              <div>{BALANCE}</div>
              <div>{account?.balance}</div>
            </ListGroup.Item>
          </ListGroup>
        </Card>

        <div className="pt-5 pb-2">
          <h3>{ADD_TRANSACTION}</h3>
        </div>

        <Form>
          <Row className="mb-3">
            <Col md={{ span: 6 }}>
              <Form.Check
                inline
                label={INCOME}
                type={FORM_TYPE.RADIO}
                name="transactionType"
                onChange={() => { }}
              />
            </Col>

            <Col md={{ span: 6 }}>
              <Form.Check
                inline
                label={EXPENSE}
                type={FORM_TYPE.RADIO}
                name="transactionType"
                onChange={() => { }}
              /></Col>
          </Row>

          <FormGroup
            placeholder={TITLE}
            type={FORM_TYPE.TEXT}
            onChange={(value) => { }}
          />

          <Button
            className="w-100 py-3"
            variant={VARIANT.DARK}
            onClick={() => { }}
          >
            {CREATE}
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default AccountDetailsPage;