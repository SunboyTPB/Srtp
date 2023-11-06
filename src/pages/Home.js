import { Button, List, ListSubheader,  ListItemButton, ListItemText } from "@mui/material";
import {React, useState} from "react";
import "./Theme.css";

function Home() {
    const [contentTitle, setContentTitle] = useState();
    const chooseforcontent = (event) => {
        setContentTitle(event.target.id);
        console.log(contentTitle);
    }
    return (
        <>
        <div className="home">
            <div className="logo">
                <h1 style={{"paddingTop": "200px"}}>SRTP项目组题目测试</h1>
            </div>
            <div className="buttons">
                <Button variant="contained" style={{"marginRight": "20%"}}>安卓</Button>
                <Button variant="contained">苹果</Button>
            </div>
            <div className="qrcode">
                
            </div>
        </div>
        <div className="content">
            <div className="content_menu" >
                <List id="menu" onClick={chooseforcontent}>
                    <ListItemButton id="关于公司">
                        <ListItemText id="关于公司" primary="关于公司" />
                    </ListItemButton>
                    <ListItemButton id="公司职责">
                        <ListItemText primary="公司职责" />
                    </ListItemButton>
                    <ListItemButton id="特色功能">
                        <ListItemText primary="特色功能" />
                    </ListItemButton>
                </List>
            </div>
            <div className="content_content">
                
            </div>
        </div>
        </>
    )
}

export default Home;