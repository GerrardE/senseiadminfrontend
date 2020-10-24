import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import { firebaseSignin } from "@domain/redux/signin/signin.thunks";
import { Label, Inputfield, Button, ErrorMessage } from "../../atoms";
import { Auth } from "../../templates";
import { emailSchema, passwordSchema } from "../validations/schema";
import AppLoader from "../../molecules/AppLoader";

const Signin = ({ history }) => {
  const { register, handleSubmit, errors } = useForm();
  const { email, password } = errors;
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.signin.loading);

  const onSubmit = (data) => {
    dispatch(firebaseSignin(data, history));
  };

  return (
    <Auth title="Signin">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="needs-validation"
        noValidate
      >
        <div className="form-group">
          <Label labelClassName="text-normal text-dark">Email</Label>
          <Inputfield
            inputType="email"
            inputClassName={classnames("form-control", {
              "is-invalid": email,
            })}
            inputPlaceholder="admin@sensei.com"
            inputName="email"
            inputRef={register(emailSchema)}
          />
          <ErrorMessage message={email?.message} />
        </div>
        <div className="form-group">
          <Label labelClassName="text-normal text-dark">Password</Label>
          <Inputfield
            inputType="password"
            inputClassName={classnames("form-control", {
              "is-invalid": password,
            })}
            inputPlaceholder="Password"
            inputName="password"
            inputRef={register(passwordSchema)}
          />
          <ErrorMessage message={password?.message} />
        </div>
        {loading ? (
          <center>
            <AppLoader loaderWidth="80" />
          </center>
        ) : (
          <div className="form-group">
            <div className="peers ai-c jc-sb fxw-nw">
              <div className="peer">
                <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                  <Inputfield
                    inputType="checkbox"
                    inputClassName="peer"
                    inputName="rememberMe"
                    inputRef={register}
                  />
                  <Label
                    htmlFor="rememberMe"
                    labelClassName="peers peer-greed js-sb ai-c"
                  >
                    <span className="peer peer-greed">Remember Me</span>
                  </Label>
                </div>
              </div>
              <div className="peer">
                <Button buttonType="submit" buttonClassName="btn btn-primary">
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </form>
    </Auth>
  );
};

Signin.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]),
};

Signin.defaultProps = {
  history: {},
};

export default Signin;
