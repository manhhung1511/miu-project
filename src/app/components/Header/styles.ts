import { makeStyles } from "tss-react/mui";
import colors from "core/styles/colors";

const useStyles = makeStyles()(() => ({
    headerNav1: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
    },
    headerNavLeft: {
        display: "flex",
        alignItems: "center"
    },
    headerNavRight: {
        display: "flex",
        alignItems: "center !important"
    },
    headerLink: {
        fontSize: "16px",
        padding: "20px 14px",
        textDecoration: "none",
        fontWeight: "600",
        color: '#999999',
        ":hover": {
            color: colors.colors.primary
          }
    },
    headerLinkAccout: {
        fontSize: "18px",
        padding: "20px 15px",
        textDecoration: "none",
        color: colors.colors.primary,
        ":hover": {
            color: colors.colors.primary
        },
        '@media (max-width: 600px)': {
            padding: "10px",
        },
    },
    notification: {
        width: "520px",
        height: "200px",
        backgroundColor: "#FFF",
        borderRadius: "20px",
        textAlign:"center",
        padding: "20px"
    },
    notificationButton: {
        marginTop:"20px"
    },
    headerLogo: {
        '@media (max-width: 600px)': {
            position: "absolute",
            top: "52%",
            left: "50%",
            paddingLeft: "0",
            transform: "translate(-50%, -50%)"
        },
    },
    DrawItem:  {
        textDecoration: "none",
        color: "#444"
    },
    ListItem: {
        ':hover': {
            color: colors.colors.primary
        }
    },
    transferJobLink: {
        textDecoration: "none"
    },
    navTopContainer: {
        backgroundColor: "#333333",
    },
    navTop: {
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center"
    },
    navTop1: {
        display: "flex",
        alignItems:"center",
    },
    navtopUserLink: {
        color: "white",
        textDecoration: "none",
        padding: "10px 5px"

    }
}));

export default useStyles;