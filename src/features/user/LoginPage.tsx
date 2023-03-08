import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/store/hooks";
import { loginUser } from "../../app/store/users/action";
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

  const handleRegisterUser = () => {
    if (registerUserInput.password != registerUserInput.confirmPassword) console.log("Not valid.")
    console.log(registerUserInput);
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <Card className="w-25">
        <Card.Header>
          {loginForm ? LOGIN : REGISTER}
        </Card.Header>

        <Form className="p-5">
          {registerForm &&
            <>
              <div className="d-flex">
                <Form.Group className="mb-3 w-50 me-2">
                  <Form.Label>{FIRSTNAME}</Form.Label>
                  <Form.Control
                    type={FORM_TYPE.TEXT}
                    placeholder={FIRSTNAME}
                    onChange={evt => (setRegisterUserInput(prev => ({ ...prev, firstName: evt.target.value })))}
                  />
                </Form.Group>

                <Form.Group className="mb-3 w-50 ms-2">
                  <Form.Label>{LASTNAME}</Form.Label>
                  <Form.Control
                    type={FORM_TYPE.TEXT}
                    placeholder={LASTNAME}
                    onChange={evt => (setRegisterUserInput(prev => ({ ...prev, lastName: evt.target.value })))}
                  />
                </Form.Group>
              </div>

              <Form.Group className="mb-3">
                <Form.Label>{USERNAME}</Form.Label>
                <Form.Control
                  type={FORM_TYPE.TEXT}
                  placeholder={USERNAME}
                  onChange={evt => (setRegisterUserInput(prev => ({ ...prev, userName: evt.target.value })))}
                />
              </Form.Group>
            </>
          }

          <Form.Group className="mb-3">
            <Form.Label>{EMAIL_ADDRESS}</Form.Label>
            <Form.Control
              type={FORM_TYPE.EMAIL}
              placeholder={EMAIL_ADDRESS}
              onChange={evt =>
                loginForm
                  ? setLoginUserInput(prev => ({ ...prev, email: evt.target.value }))
                  : setRegisterUserInput(prev => ({ ...prev, email: evt.target.value }))
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>{PASSWORD}</Form.Label>
            <Form.Control
              type={FORM_TYPE.PASSWORD}
              placeholder={PASSWORD}
              onChange={evt =>
                loginForm
                  ? setLoginUserInput(prev => ({ ...prev, password: evt.target.value }))
                  : setRegisterUserInput(prev => ({ ...prev, password: evt.target.value }))
              }
            />
          </Form.Group>

          {registerForm &&
            <Form.Group className="mb-3">
              <Form.Label>{CONFIRM_PASSWORD}</Form.Label>
              <Form.Control
                type={FORM_TYPE.PASSWORD}
                placeholder={CONFIRM_PASSWORD}
                onChange={evt => (setRegisterUserInput(prev => ({ ...prev, confirmPassword: evt.target.value })))}
              />
            </Form.Group>
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
    </div >
  )
}

export default LoginPage;