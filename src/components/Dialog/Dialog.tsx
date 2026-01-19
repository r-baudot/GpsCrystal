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
  confirmIcon?: ReactNode;
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
  confirmIcon,
  children,
}: DialogProps) => {
  return (
    <MuiDialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ px: 4, pt: 3 }}>{title}</DialogTitle>
      <DialogContent sx={{ px: 4, py: 3 }}>{children}</DialogContent>
      <DialogActions sx={{ px: 4, pb: 3, pt: 2 }}>
        <Button onClick={onClose}>{cancelLabel}</Button>
        {onConfirm && (
          <Button variant="contained" onClick={onConfirm} disabled={confirmDisabled} startIcon={confirmIcon}>
            {confirmLabel}
          </Button>
        )}
      </DialogActions>
    </MuiDialog>
  );
};
