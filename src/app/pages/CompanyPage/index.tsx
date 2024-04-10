import { Button, Container } from "@mui/material";
import Typography from '@mui/material/Typography'; 
import Grid from '@mui/material/Grid';
import styles from "./CompanyPage.module.scss"
import classNames from "classnames/bind";
import Img from "core/app/components/Img";

const cx = classNames.bind(styles);

export default function CompanyPage() {
    return (
        <div style={{marginTop: "77px", paddingTop:"78px"}}>
            <Container maxWidth="xl" sx={{background: "#f1f9fd", marginBottom:"58px"}}>
            <div className={cx("company_banner")} >
                 <Grid container spacing={2}>
                    <Grid item xl={6}>
                        <Grid container spacing={2}>
                            <Grid item >
                                <Img src="https://images.careerbuilder.vn/employer_folders/lot7/304017/148x148/172029falogo-websitenewlogo.jpg" />
                            </Grid>
                            <Grid item>
                                <div className={cx("company_name")}>
                                    <h3>CÔNG TY TNHH FARM ANGEL</h3>
                                </div>
                                <h4>Địa điểm</h4>
                                <Typography variant="h6" gutterBottom>
                                    Lầu 72, Vincom Center Landmark 81, 720A Điện Biên Phủ, Phường 22, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam
                                </Typography>
                                <h4>Thông tin công ty</h4>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl={2}>
                         <Typography variant="h5" gutterBottom>
                            113 followers
                        </Typography>
                        <Button>
                            Theo dõi
                        </Button>
                    </Grid>
                </Grid>
                </div>
            </Container>

            <Container maxWidth="xl" sx={{marginBottom:"58px"}}>
                <div className={cx("company_introduce")} >
                        <Typography variant="h5" gutterBottom>
                            Giới thiệu về công ty
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                             Farm Angel is a Singapore-Headquartered new-age agri-tech company with operations in SE Asia and Africa. Farm Angel provides a full-stack solution to smallholder farmers, businesses and agripreneurs across the entire agriculture value chain – from Seed to Sale, and everything in-between!
                        </Typography>
                </div>
            </Container>
            <Container maxWidth="xl" sx={{}}>
                <div className={cx("company_work")} >
                        <Typography variant="h5" gutterBottom>
                            Đơn hàng hiện tại
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                             Farm Angel is a Singapore-Headquartered new-age agri-tech company with operations in SE Asia and Africa. Farm Angel provides a full-stack solution to smallholder farmers, businesses and agripreneurs across the entire agriculture value chain – from Seed to Sale, and everything in-between!
                        </Typography>
                </div>
            </Container>
        </div>
    )
}