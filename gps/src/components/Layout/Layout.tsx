"use client";
import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Box
        component="header"
        sx={{
          bgcolor: "white",
          py: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
          boxShadow: "0 2px 12px rgba(0, 132, 253, 0.06)",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, #0084fd 0%, #00c6fd 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0, 132, 253, 0.3)",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "white",
                    fontWeight: 800,
                    fontSize: "0.8rem",
                    fontFamily: "monospace",
                  }}
                >
                  GPS
                </Box>
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "text.primary",
                }}
              >
                Manager
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.25,
                pl: 2,
                borderLeft: "3px solid",
                borderImage:
                  "linear-gradient(180deg, #0084fd 0%, #00c6fd 100%) 1",
              }}
            >
              <Box
                sx={{
                  fontFamily: "monospace",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "text.primary",
                  letterSpacing: "0.02em",
                }}
              >
                48.8566° N
              </Box>
              <Box
                sx={{
                  fontFamily: "monospace",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  color: "text.primary",
                  letterSpacing: "0.02em",
                }}
              >
                12.3522° E
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main content */}
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          background: "linear-gradient(135deg, #0084fd 0%, #00c6fd 100%)",
          py: 4,
          mt: "auto",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              mb: 5,
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "8px",
                bgcolor: "rgba(255, 255, 255, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "white",
                  fontWeight: 800,
                  fontSize: "0.7rem",
                  fontFamily: "monospace",
                }}
              >
                GPS
              </Box>
            </Box>
            <Box
              component="span"
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                color: "white",
              }}
            >
              Manager
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: 2, sm: 3 },
            }}
          >
            <Box
              component="a"
              href="#"
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.95rem",
                textDecoration: "none",
                "&:hover": { color: "white", textDecoration: "underline" },
              }}
            >
              Conditions Générales d'Utilisation
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.95rem",
                textDecoration: "none",
                "&:hover": { color: "white", textDecoration: "underline" },
              }}
            >
              Conditions Générales de Vente
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.95rem",
                textDecoration: "none",
                "&:hover": { color: "white", textDecoration: "underline" },
              }}
            >
              Politique de confidentialité
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.95rem",
                textDecoration: "none",
                "&:hover": { color: "white", textDecoration: "underline" },
              }}
            >
              Mentions Légales
            </Box>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              mt: 4,
              pt: 3,
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <Box
              component="span"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "0.9rem",
              }}
            >
              © {new Date().getFullYear()} GPS Manager. Tous droits réservés.
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
