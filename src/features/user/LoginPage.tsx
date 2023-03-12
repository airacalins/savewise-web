import { useState } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormGroup from "../../app/components/Form/FormGroup";
import { useAppDispatch } from "../../app/store/hooks";
import { loginUser, registerUser } from "../../app/store/users/action";
import { LoginUserInput, RegisterUserInput } from "../../app/store/users/types";
import { CONFIRM_PASSWORD, EMAIL_ADDRESS, EMPTY_STRING, FIRSTNAME, LASTNAME, LOGIN, LOGIN_MESSAGE, PASSWORD, REGISTER, REGISTER_MESSAGE, SIGN_IN, SIGN_UP, USERNAME } from "../../app/utilities/constant";
import { FORM_TYPE, ROUTE, USER_FORM, VARIANT } from "../../app/utilities/enums";

interface Props {
  formType: USER_FORM,
}

const LoginPage = ({ formType }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loginUserInput, setLoginUserInput] = useState<LoginUserInput>({
    email: EMPTY_STRING,
    password: EMPTY_STRING,
  });

  const [registerUserInput, setRegisterUserInput] = useState<RegisterUserInput>({
    firstName: EMPTY_STRING,
    lastName: EMPTY_STRING,
    userName: EMPTY_STRING,
    email: EMPTY_STRING,
    password: EMPTY_STRING,
    confirmPassword: EMPTY_STRING,
  });

  const loginForm = formType == USER_FORM.LOGIN;

  const registerForm = formType == USER_FORM.REGISTER;

  const handleSwitchForm = () => navigate(formType == USER_FORM.LOGIN ? ROUTE.REGISTER : ROUTE.LOGIN);

  const handleLoginUser = async () => {
    await dispatch(loginUser(loginUserInput));
    navigate(ROUTE.HOME);
  };

  const handleRegisterUser = async () => {
    if (registerUserInput.password != registerUserInput.confirmPassword) console.log("Not valid.")
    await dispatch(registerUser(registerUserInput))
    navigate(ROUTE.LOGIN);
  };

  return (
    <div className="vh-100 d-flex align-items-center">
      <Col md={{ offset: 4, span: 4 }}>
        <Card>
          <Card.Header>
            {loginForm ? LOGIN : REGISTER}
          </Card.Header>

          <Form className="p-5">
            {
              registerForm &&
              <>
                <div className="d-flex">
                  <FormGroup
                    title={FIRSTNAME}
                    type={FORM_TYPE.TEXT}
                    width="w-50"
                    className="me-2"
                    onChange={(value) => setRegisterUserInput(prev => ({ ...prev, firstName: value }))}
                  />

                  <FormGroup
                    title={LASTNAME}
                    type={FORM_TYPE.TEXT}
                    width="w-50"
                    className="ms-2"
                    onChange={(value) => setRegisterUserInput(prev => ({ ...prev, lastName: value }))}
                  />
                </div>

                <FormGroup
                  title={USERNAME}
                  type={FORM_TYPE.TEXT}
                  onChange={(value) => setRegisterUserInput(prev => ({ ...prev, userName: value }))}
                />
              </>
            }

            <FormGroup
              title={EMAIL_ADDRESS}
              type={FORM_TYPE.EMAIL}
              onChange={(value) => loginForm
                ? setLoginUserInput(prev => ({ ...prev, email: value }))
                : setRegisterUserInput(prev => ({ ...prev, email: value }))}
            />

            <FormGroup
              title={PASSWORD}
              type={FORM_TYPE.PASSWORD}
              onChange={(value) => loginForm
                ? setLoginUserInput(prev => ({ ...prev, password: value }))
                : setRegisterUserInput(prev => ({ ...prev, password: value }))}
            />

            {
              registerForm &&
              <FormGroup
                title={CONFIRM_PASSWORD}
                type={FORM_TYPE.PASSWORD}
                onChange={(value) => setRegisterUserInput(prev => ({ ...prev, confirmPassword: value }))}
              />
            }

            <div className="my-3">
              {loginForm ? LOGIN_MESSAGE : REGISTER_MESSAGE}
              <span
                className="ps-1 text-primary"
                role="button"
                onClick={handleSwitchForm}
              >
                {loginForm ? SIGN_UP : SIGN_IN}
              </span>
            </div>

            <Button
              variant={VARIANT.DARK}
              onClick={loginForm ? handleLoginUser : handleRegisterUser}
            >
              {loginForm ? LOGIN : REGISTER}
            </Button>
          </Form>
        </Card>
      </Col>
    </div >
  )
}

export default LoginPage;