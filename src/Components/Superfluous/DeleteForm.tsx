import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export type DeleteFormProps = {
  open: boolean;
  onToggle:(event:React.SyntheticEvent)=>void;
  onSubmit: Function;
};

const DeleteForm: React.FC<DeleteFormProps> = (props) => {
  const {open, onToggle, onSubmit} = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={onToggle}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please confirm that you want to delete this. This action is irreversible!.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onToggle}>Cancel</Button>
          <Button onClick={(e)=>onSubmit(e)} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteForm;
