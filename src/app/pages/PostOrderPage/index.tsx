import Banner from "core/app/components/Banner"
import FormBox from "core/app/components/FormBox"

import classNames from "classnames/bind";
import TopCompany from "core/app/components/TopCompany";
import HotJob from "core/app/components/HotJob";
import Footer from "core/app/components/Footer";
import EmailJob from "core/app/components/EmailJob";
import { Container } from "@mui/material";
import BasicDatePicker from "core/app/components/DatePinker";
import FormOrder from "core/app/components/FormOrder";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const PostOrderPage = () => {
    const { orderId } = useParams();
    const [mode, setMode] = useState<"create" | "update">(() =>
    orderId ? "update" : "create",
  );
    
    return (
        <div style={{marginTop: "77px", padding:"30px 60px"}}>
            <Container maxWidth="xl" sx={{boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)"}}>
                {/* <BasicDatePicker/> */}
                <FormOrder mode={mode} orderId={orderId}/>
            </Container>
        </div>
    )
}