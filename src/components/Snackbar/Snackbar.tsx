"use client";
import MuiSnackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export type SnackbarSeverity = "success" | "error" | "info" | "warning";

interface SnackbarProps {
  open: boolean;
  message: string;
  severity?: SnackbarSeverity;
  onClose: () => void;
  autoHideDuration?: number;
}

export const Snackbar = ({
  open,
  message,
  severity = "success",
  onClose,
  autoHideDuration = 4000,
}: SnackbarProps) => {
  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{
          width: "100%",
          borderRadius: 2,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        }}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
};
