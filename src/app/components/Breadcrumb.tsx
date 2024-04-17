import { Box, Breadcrumbs, Container, Stack } from "@mui/material";

export default function Breadcrumb({ breadcrumbs }) {
  return (
    <Box
      style={{ background: "#FBD5E0" }}
      sx={{
        padding: {
          sm: "15px 0",
          xs: "5px 0",
          position: "fixed",
          zIndex: "1",
          width: "100%",
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Container>
    </Box>
  );
}
