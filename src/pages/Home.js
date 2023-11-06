import { Button } from "@mui/material";
import React from "react";

function Home() {
    return (
        <>
        <div className="home">
            <div className="logo">
                <h1>SRTP项目组题目测试</h1>
            </div>
            <div className="buttons">
                <Button variant="contained">Android</Button>
                <Button variant="contained">iOS</Button>
            </div>
            <div className="qrcode">
                
            </div>
        </div>
        </>
    )
}

export default Home;