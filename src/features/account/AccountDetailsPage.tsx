import { useEffect } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../../app/components/Loading/LoadingIndicator";
import { fetchAccount } from "../../app/store/accounts/action";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { fetchTransactions } from "../../app/store/transactions/action";
import { ACCOUNT_CREATED, BALANCE, TRANSACTIONS } from "../../app/utilities/constant";

const AccountDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { isFetching: isFetchingAccount, account } = useAppSelector(state => state.account)
  const { isFetching: isFetchingTransactions, transactions } = useAppSelector(state => state.transaction)

  const { id } = useParams();

  const fetchAccountTransactions = async () => {
    if (!id) return;
    await dispatch(fetchAccount({ id }));
    await dispatch(fetchTransactions({ accountId: id }));
  }

  useEffect(() => {
    fetchAccountTransactions();
  }, [id])

  if (isFetchingAccount && isFetchingTransactions) return <Loading />

  return (
    <Row>
      <Col md={{ span: 3 }}>
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
      </Col>

      <Col md={{ span: 9 }}>
        <h3>{TRANSACTIONS}</h3>
        {
          transactions.length == 0 && <h1>No transactions</h1>
        }
        {
          transactions.map(transaction => <h1>{transaction.amount}</h1>)
        }
      </Col>
    </Row>
  )
}

export default AccountDetailsPage;