import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { LoginUser, RegisterUser } from "../../app/store/users/types";
import { CONFIRM_PASSWORD, EMAIL_ADDRESS, EMPTY_STRING, FIRSTNAME, LASTNAME, LOGIN, LOGIN_MESSAGE, PASSWORD, REGISTER, REGISTER_MESSAGE, SIGN_IN, SIGN_UP, USERNAME } from "../../app/utilities/constant";
import { BUTTON_VARIANT, FORM_TYPE } from "../../app/utilities/enums";

const LoginPage = () => {
  enum USER_PAGE {
    LOGIN,
    REGISTER,
  }

  const [isLoginPage, setIsLoginPage] = useState<boolean>(false);

  const [loginUser, setLoginUser] = useState<LoginUser>({
    email: EMPTY_STRING,
    password: EMPTY_STRING,
  });

  const [registerUser, setRegisterUser] = useState<RegisterUser>({
    firstName: EMPTY_STRING,
    lastName: EMPTY_STRING,
    userName: EMPTY_STRING,
    email: EMPTY_STRING,
    password: EMPTY_STRING,
    confirmPassword: EMPTY_STRING,
  })

  const handleTogglePage = () => setIsLoginPage(!isLoginPage);

  const handleLogin = () => console.log(loginUser);

  const handleRegister = () => {
    if (registerUser.password != registerUser.confirmPassword) console.log("Not valid.")
    return console.log(registerUser);
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <Card className="w-50">
        <Card.Header>
          {isLoginPage ? LOGIN : REGISTER}
        </Card.Header>

        <Form className="p-5">
          {!isLoginPage && <>
            <div className="d-flex">
              <Form.Group className="mb-3 w-50 me-2">
                <Form.Label>{FIRSTNAME}</Form.Label>
                <Form.Control
                  type={FORM_TYPE.TEXT}
                  placeholder={FIRSTNAME}
                  onChange={evt => (setRegisterUser(prev => ({ ...prev, firstName: evt.target.value })))}
                />
              </Form.Group>

              <Form.Group className="mb-3 w-50 ms-2">
                <Form.Label>{LASTNAME}</Form.Label>
                <Form.Control
                  type={FORM_TYPE.TEXT}
                  placeholder={LASTNAME}
                  onChange={evt => (setRegisterUser(prev => ({ ...prev, lastName: evt.target.value })))}
                />
              </Form.Group>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>{USERNAME}</Form.Label>
              <Form.Control
                type={FORM_TYPE.TEXT}
                placeholder={USERNAME}
                onChange={evt => (setRegisterUser(prev => ({ ...prev, userName: evt.target.value })))}
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
                isLoginPage
                  ? setLoginUser(prev => ({ ...prev, email: evt.target.value }))
                  : setRegisterUser(prev => ({ ...prev, email: evt.target.value }))
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>{PASSWORD}</Form.Label>
            <Form.Control
              type={FORM_TYPE.PASSWORD}
              placeholder={PASSWORD}
              onChange={evt =>
                isLoginPage
                  ? setLoginUser(prev => ({ ...prev, password: evt.target.value }))
                  : setRegisterUser(prev => ({ ...prev, password: evt.target.value }))
              }
            />


          </Form.Group>

          {!isLoginPage && <Form.Group className="mb-3">
            <Form.Label>{CONFIRM_PASSWORD}</Form.Label>
            <Form.Control
              type={FORM_TYPE.PASSWORD}
              placeholder={CONFIRM_PASSWORD}
              onChange={evt => (setRegisterUser(prev => ({ ...prev, confirmPassword: evt.target.value })))}
            />
          </Form.Group>
          }

          <div className="my-3">
            {isLoginPage ? LOGIN_MESSAGE : REGISTER_MESSAGE}
            <span
              className="ps-1 text-primary"
              role="button"
              onClick={handleTogglePage}
            >
              {isLoginPage ? SIGN_UP : SIGN_IN}
            </span>
          </div>

          <Button
            variant={BUTTON_VARIANT.PRIMARY}
            onClick={isLoginPage ? handleLogin : handleRegister}
          >
            {isLoginPage ? LOGIN : REGISTER}
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default LoginPage;