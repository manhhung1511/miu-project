import { createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import colors from "core/styles/colors";
import { commonText } from "core/styles/text";
import { redux } from "zustand/middleware";

export const theme = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
    },
    },
    // MuiAlert: {
    //   styleOverrides: {
    //     root: {
    //       alignItems: "center",
    //       "& > .MuiAlert-message": {
    //         ...commonText,
    //         color: colors.black.primary,
    //       },
    //     },
    //     standardSuccess: {
    //       backgroundColor: colors.green.light3,
    //     },
    //     standardError: {
    //       backgroundColor: colors.red.light2,
    //     },
    //     standardWarning: {
    //       backgroundColor: colors.yellow.light,
    //     },

    //     icon: {
    //       padding: 0,
    //       marginRight: 10,
    //     },
    //     message: {
    //       padding: 0,
    //     },
    //   },
    // },
    MuiButton: {
        styleOverrides: {
            root: {
                backgroundColor: colors.colors.primary,
                color:'#FFF',
                "&:hover": {
                    backgroundColor: colors.colors.primary,
                }
            },
        }
    },
    MuiCheckbox: {
        styleOverrides: {
            root: {
                "&.Mui-checked": {
                    color: colors.colors.primary,
                }
            },
        }
    },
    MuiInputLabel: {
        styleOverrides: {
            root: {
                "&.Mui-focused": {
                    color: colors.colors.primary,
                }
            },
        }
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: '#999',
                },
            },
        }
    },
    MuiSelect: {
        styleOverrides: {
            root: {
                "&.Mui-focused": {
                    borderColor: '#999',
                }

            }
        }
      },
    MuiTab: {
        styleOverrides: {
            root: {
                "&.Mui-selected": {
                    color: colors.colors.primary,
                }
            }
        }
    },
    MuiDialog: {
        styleOverrides: {
          root: {},
          paper: {
            borderRadius: "20px!important",
            padding: "10px!important",
          },
        },
      },
    // MuiSkeleton: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: "5px",
    //     },
    //   },
    // },
    // MuiTab: {
    //   styleOverrides: {
    //     root: {
    //       ...commonText,
    //       color: colors.black.primary,
    //       fontWeight: 400,
    //       fontSize: "16px",
    //       textTransform: "captialize",
    //       "&.Mui-selected": {
    //         color: colors.blue.dark,
    //         fontWeight: 600,
    //         fontSize: "16px",
    //       },
    //     },
    //   },
    // },
    // MuiDialog: {
    //   styleOverrides: {
    //     root: {},
    //     paper: {
    //       borderRadius: "20px!important",
    //       padding: "10px!important",
    //     },
    //   },
    // },
  },
  typography: {
   
  },
  palette: {
    
  },
});
