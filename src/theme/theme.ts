"use client";
import { createTheme } from "@mui/material/styles";

const palette = {
  primary: {
    main: "#0084fd",
    light: "#00c6fd",
    dark: "#0066cc",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#00c6fd",
    light: "#5dd9ff",
    dark: "#0084fd",
    contrastText: "#ffffff",
  },
  success: {
    main: "#10b981",
    light: "#34d399",
    dark: "#059669",
  },
  error: {
    main: "#ef4444",
    light: "#f87171",
    dark: "#dc2626",
  },
  background: {
    default: "#f8fafc",
    paper: "#ffffff",
  },
  text: {
    primary: "#0f172a",
    secondary: "#64748b",
  },
  divider: "#e2e8f0",
};

const primaryGradient = "linear-gradient(135deg, #0084fd 0%, #00c6fd 100%)";

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      color: palette.text.primary,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      color: palette.text.primary,
    },
    body1: {
      fontSize: "0.938rem",
      color: palette.text.primary,
    },
    body2: {
      fontSize: "0.875rem",
      color: palette.text.secondary,
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 10,
          padding: "10px 24px",
          boxShadow: "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        contained: {
          background: primaryGradient,
          "&:hover": {
            background: "linear-gradient(135deg, #00c6fd 0%, #0084fd 100%)",
            boxShadow: "0 8px 25px rgba(0, 132, 253, 0.35)",
            transform: "translateY(-2px)",
          },
          "&:active": {
            transform: "translateY(0)",
          },
        },
        containedError: {
          background: `linear-gradient(135deg, ${palette.error.main} 0%, ${palette.error.light} 100%)`,
          "&:hover": {
            background: `linear-gradient(135deg, ${palette.error.light} 0%, ${palette.error.main} 100%)`,
            boxShadow: "0 8px 25px rgba(239, 68, 68, 0.35)",
          },
        },
        outlined: {
          borderWidth: 2,
          borderColor: palette.primary.main,
          color: palette.primary.main,
          "&:hover": {
            borderWidth: 2,
            backgroundColor: "rgba(0, 132, 253, 0.06)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0, 132, 253, 0.08)",
          border: "1px solid rgba(226, 232, 240, 0.8)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          background: "#ffffff",
          "&:hover": {
            boxShadow: "0 12px 40px rgba(0, 132, 253, 0.15)",
            transform: "translateY(-4px)",
            borderColor: "rgba(0, 132, 253, 0.2)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "scale(1.1)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 10,
            transition: "all 0.3s ease",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: palette.primary.main,
              borderWidth: 2,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderWidth: 2,
              borderColor: palette.primary.main,
            },
            "&.Mui-focused": {
              boxShadow: "0 0 0 4px rgba(0, 132, 253, 0.12)",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 20,
          boxShadow: "0 25px 80px rgba(0, 132, 253, 0.2)",
          background: "#ffffff",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
        filledSuccess: {
          background: `linear-gradient(135deg, ${palette.success.main} 0%, ${palette.success.light} 100%)`,
        },
        filledError: {
          background: `linear-gradient(135deg, ${palette.error.main} 0%, ${palette.error.light} 100%)`,
        },
        filledInfo: {
          background: primaryGradient,
        },
      },
    },
  },
});
