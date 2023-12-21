import { Box, TextField } from "@mui/material";
import React from "react";
import "./Theme.css";
import { useNavigate } from "react-router-dom";

function Title() {
    const navigate = useNavigate();
    const login = () => {
        navigate("/login");
    }
    return (
        <>
        <div style={{"display": "flex", "border": "1px solid"}}>
            <div className="title_image" style={{"width": "20%", "paddingLeft": "10px", "paddingRight": "10px"}}>
                <img src="" style={{"width": "100%", "height": "100%"}} />
            </div>
            <div className="title_search" style={{"width": "60%", "paddingLeft": "10px", "paddingRight": "10px"}}>
                <TextField fullWidth />
            </div>
            <div className="title_downloadAndLogin" style={{"width": "20%", "display": "flex", "justifyContent": "center", "alignItems": "center"}}>
                <a className="link">下载客户端</a>
                <a className="link" style={{"marginLeft": "20px"}} onClick={login}>登录</a>
            </div>
        </div>
        </>
    )
}

export default Title;