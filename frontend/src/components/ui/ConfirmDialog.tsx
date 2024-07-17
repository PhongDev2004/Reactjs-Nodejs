import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";

type ConfirmDialogProps = {
  confirm: boolean;
  onConfirm: (confirm: boolean) => void;
  onDelete: (id: string) => Promise<void>; // Updated onDelete to accept id parameter
  idDelete: string | null; // idDelete prop added here
};

export default function ConfirmDialog({
  confirm,
  onConfirm,
  onDelete,
  idDelete, // Receive idDelete from props
}: ConfirmDialogProps) {
  const handleClose = () => {
    onConfirm(false);
  };

  const handleAgree = async () => {
    onConfirm(false);
    if (idDelete) {
      try {
        await onDelete(idDelete);
      } catch (error) {
        console.error("Failed to delete product:", error);
      }
    }
  };

  return (
    <Dialog
      open={confirm}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Delete Product"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this product?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonCancel onClick={handleClose}>Cancel</ButtonCancel>
        <ButtonOk onClick={handleAgree} autoFocus>
          OK
        </ButtonOk>
      </DialogActions>
    </Dialog>
  );
}

const ButtonOk = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 10,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 20px",
});

const ButtonCancel = styled(Button)(
  () => `
  background-color: #000;
  color: #fff;
  &:hover {
    background-color: #000;
    opacity: 0.6;
  }
  `
);
