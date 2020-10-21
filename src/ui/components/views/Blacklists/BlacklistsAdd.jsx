import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import { addBlacklist } from "@domain/redux/blacklists/blacklists.thunks";
import { Label, Inputfield, Button, ErrorMessage } from "../../atoms";
import {
  textFieldSchema,
} from "../validations/schema";
import { AppLoader } from "../../molecules";

const BlacklistsAdd = ({ ...rest }) => {
  const { props } = rest;
  const { history } = props;
  const { register, handleSubmit, errors } = useForm();
  const { entity, entitytype } = errors;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.blacklists.loading);

  const onSubmit = (data) => {
    dispatch(addBlacklist(data, history));
  };

  return (
    <div className="container-fluid">
      <h4 className="c-grey-900 mT-10 mB-30">Blacklists</h4>
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="bgc-white bd bdrs-3 p-20 mB-20">
            <h4 className="c-grey-900 mB-20">Add Item</h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="needs-validation"
              noValidate
            >
              <div className="form-row">
                <div className="form-group col-md-6">
                  <Label labelClassName="text-normal text-dark">
                    Entity Type
                  </Label>
                  <Inputfield
                    inputType="text"
                    inputClassName={classnames("form-control", {
                      "is-invalid": entitytype,
                    })}
                    inputName="entitytype"
                    inputRef={register(textFieldSchema)}
                  />
                  <ErrorMessage message={entitytype?.message} />
                </div>
                <div className="form-group col-md-6">
                  <Label labelClassName="text-normal text-dark">
                    Entity
                  </Label>
                  <Inputfield
                    inputType="text"
                    inputClassName={classnames("form-control", {
                      "is-invalid": entity,
                    })}
                    inputName="entity"
                    inputRef={register(textFieldSchema)}
                  />
                  <ErrorMessage message={entity?.message} />
                </div>
              </div>

              {loading ? (
                <center>
                  <AppLoader loaderWidth="15%" loaderClassName="app-loader" />
                </center>
              ) : (
                <div className="form-group d-flex flex-row-reverse">
                  <div className="peers ai-c jc-sb fxw-nw">
                    <div className="peer">
                      <Button
                        buttonType="submit"
                        buttonClassName="btn btn-primary mr-2"
                      >
                        Save
                      </Button>
                      <a
                        className="btn btn-outline-danger"
                        href="/dashboard/blacklists"
                        role="button"
                      >
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="col-md-2" />
      </div>
    </div>
  );
};

BlacklistsAdd.propTypes = {
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  props: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

BlacklistsAdd.defaultProps = {
  history: {},
  props: {},
};

export default BlacklistsAdd;
