import { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../../app/components/Loading/LoadingIndicator";
import { fetchAccount } from "../../app/store/accounts/action";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { ACCOUNT_CREATED, BALANCE } from "../../app/utilities/constant";

const AccountDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { isFetching, account } = useAppSelector(state => state.account)
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    dispatch(fetchAccount({ id }));
  }, [id])

  if (isFetching) return <Loading />

  return (
    <Card className="w-100">
      <Card.Title className="p-5">
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
  )
}

export default AccountDetailsPage;