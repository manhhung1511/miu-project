import { Box } from "@mui/material";

import { Signup } from "core/app/components/Auth/Signup";

export const RegisterPage = () => {
  return (
    <Box
    sx={{
        marginTop: { sm: "110px", xs: "70px" },
        paddingTop: { sm: "78px", xs: "10px" },
        // maxWidth: "45%"
      }}
    >
      <Signup />
    </Box>
  );
};
