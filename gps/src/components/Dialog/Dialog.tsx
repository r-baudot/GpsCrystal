import { ReactNode } from "react";
import MuiDialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

interface DialogProps {
  open: boolean;
  title: string;
  onClose: () => void;
  onConfirm?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmDisabled?: boolean;
  children: ReactNode;
}

export const Dialog = ({
  open,
  title,
  onClose,
  onConfirm,
  confirmLabel = "Confirmer",
  cancelLabel = "Annuler",
  confirmDisabled = false,
  children,
}: DialogProps) => {
  return (
    <MuiDialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{cancelLabel}</Button>
        {onConfirm && (
          <Button variant="contained" onClick={onConfirm} disabled={confirmDisabled}>
            {confirmLabel}
          </Button>
        )}
      </DialogActions>
    </MuiDialog>
  );
};
