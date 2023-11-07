import { Button, List, ListSubheader,  ListItemButton, ListItemText } from "@mui/material";
import {React, useState} from "react";
import "./Theme.css";

function Home() {
    const [contentTitle, setContentTitle] = useState();
    const chooseforcontent = (event) => {
        setContentTitle(event.target.id);
    }
    return (
        <>
        <div className="home">
            <div className="logo">
                <h1 style={{"paddingTop": "200px", "color": "white", "position": "absolute", "margin": "auto", "left": 0, "right": 0}}>SRTP项目组题目测试</h1>
            </div>
            <div className="buttons">
                <Button variant="contained" style={{"marginRight": "20%"}}>安卓</Button>
                <Button variant="contained">苹果</Button>
            </div>
            <div className="qrcode">
                
            </div>
        </div>
        <div className="content">
            <div className="content_menu" onClick={chooseforcontent}>
                <Button fullWidth id="公司简介">公司简介</Button>
                <Button fullWidth id="关于我们">关于我们</Button>
            </div>
            <div className="content_content">
                <h1>{contentTitle}</h1>
            </div>
        </div>
        </>
    )
}

export default Home;