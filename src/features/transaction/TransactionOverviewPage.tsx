import moment from "moment";
import { useEffect, useState } from "react";
import { Button, Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import FormGroup from "../../app/components/Form/FormGroup";
import Loading from "../../app/components/Loading/LoadingIndicator";
import { deleteAccount, fetchAccount, fetchAccounts } from "../../app/store/accounts/action";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { createTransaction, fetchTransactions } from "../../app/store/transactions/action";
import { CreateTransactionInput } from "../../app/store/transactions/types";
import { ADD_TRANSACTION, AMOUNT, BALANCE, CREATE, DATE_CREATED, DELETE, EXPENSE, INCOME, NO_TRANSACTIONS, TITLE, TRANSACTIONS } from "../../app/utilities/constant";
import { FORM_TYPE, ROUTE_NAME, TRANSACTION_TYPE, VARIANT } from "../../app/utilities/enums";

const TransactionOverviewPage = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { isFetching: isFetchingAccount, account } = useAppSelector(state => state.account)
  const { isFetching: isFetchingTransactions, transactions } = useAppSelector(state => state.transaction)

  const { id } = useParams();

  const [createTransactionInput, setCreateTransactionInput] = useState<CreateTransactionInput>({
    accountId: id!,
    transactionType: TRANSACTION_TYPE.INCOME,
    amount: 0,
    dateCreated: Date.now().toString(),
  })

  const fetchAccountTransactions = async () => {
    if (!!!id) return console.log("Not found");
    await dispatch(fetchAccount({ id }));
    await dispatch(fetchTransactions({ accountId: id }));
  }

  useEffect(() => {
    fetchAccountTransactions();
  }, [id])

  const handleDeleteAccountAndTransactions = async () => {
    if (!!!id) return console.log("Not found");
    await dispatch(deleteAccount({ id }));
    navigate(ROUTE_NAME.ACCOUNT);
    await dispatch(fetchAccounts());
  }

  const handleCreateTransaction = async () => {
    await dispatch(createTransaction(createTransactionInput));
    await dispatch(fetchTransactions({ accountId: id! }));
  }

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
          <Card.Title className="p-3 m-0 d-flex justify-content-between align-items-center">
            {account?.title}
            <Button
              variant={VARIANT.DANGER}
              onClick={handleDeleteAccountAndTransactions}
            >
              {DELETE}
            </Button>
          </Card.Title>

          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex justify-content-between">
              <div>{DATE_CREATED}</div>
              <div>{moment(account?.dateCreated).format('L')}</div>
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
                checked
                onChange={() => {
                  setCreateTransactionInput((prev) => ({ ...prev, transactionType: TRANSACTION_TYPE.INCOME }))
                }}
              />
            </Col>

            <Col md={{ span: 6 }}>
              <Form.Check
                inline
                label={EXPENSE}
                type={FORM_TYPE.RADIO}
                name="transactionType"
                onChange={(evt) => {
                  setCreateTransactionInput((prev) => ({ ...prev, transactionType: TRANSACTION_TYPE.EXPENSE }))
                }}
              /></Col>
          </Row>

          <FormGroup
            title={TITLE}
            placeholder={TITLE}
            type={FORM_TYPE.TEXT}
            onChange={(value) => { setCreateTransactionInput((prev) => ({ ...prev, title: parseInt(value) })) }}
          />

          <FormGroup
            title={AMOUNT}
            placeholder={AMOUNT}
            type={FORM_TYPE.NUMBER}
            onChange={(value) => { setCreateTransactionInput((prev) => ({ ...prev, amount: parseInt(value) })) }}
          />

          <Button
            className="w-100 py-3"
            variant={VARIANT.DARK}
            onClick={handleCreateTransaction}
          >
            {CREATE}
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default TransactionOverviewPage;