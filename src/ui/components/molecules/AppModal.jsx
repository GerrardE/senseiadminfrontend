import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deleteSetting } from "@domain/redux/settings/settings.thunks";
import { deleteBlacklist } from "@domain/redux/blacklists/blacklists.thunks";

const AppModal = ({ config, show, toggle }) => {
  const dispatch = useDispatch();
  const { type, body, delete: del } = config;
  
  const onDelete = async (type, body) => {
    if(type == "settings") {
      await dispatch(deleteSetting(body?.id));
    }
    if(type == "blacklists") {
      await dispatch(deleteBlacklist(body?.id));
    }

    window.location.reload();
  };

  return (
    <div>
      <Modal isOpen={show} toggle={toggle} className="modal-dialog-centered">
        <ModalHeader toggle={toggle}>{config.title}</ModalHeader>
        {del && (
          <ModalBody>Are you sure you want to delete this item?</ModalBody>
        )}
        <ModalFooter>
          <Button
            color="primary"
            className="mr-2"
            onClick={() => onDelete(type, body)}
          >
            {config.btnText}
          </Button>
          <Button className="btn-outline-danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

AppModal.propTypes = {
  config: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  toggle: PropTypes.func.isRequired,
  show: PropTypes.oneOfType([PropTypes.bool]).isRequired,
};

export default AppModal;
