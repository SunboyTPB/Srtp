import React, { useState } from "react";
import Title from "./Title";
import { Button, createTheme, styled } from "@mui/material";
import "./Theme.css";

function Download() {
    const [platform, setPlatform] = useState();
    const android = () => {
        setPlatform("Android");
    }

    const apple = () => {
        setPlatform("Apple");
    }

    const harmony = () => {
        setPlatform("HarmonyOS");
    }
    return (
        <>
        <Title />
        <div style={{"display": "flex", "width": "100%", "height": "100vh"}}>
            <div style={{"width": "60%"}}>
                {platform}
            </div>
            <div style={{"width": "40%", "display": "flex"}}>
                <div style={{"width": "40%"}}>
                    <div><Button variant="contained" className="coloredButton1" style={{"marginTop": "120%"}} onMouseOver={android}>安卓</Button></div>
                    <div><Button variant="contained" className="coloredButton1" style={{"marginTop": "5%"}} onMouseOver={apple}>苹果</Button></div>
                    <div><Button variant="contained" className="coloredButton1" style={{"marginTop": "5%"}} onMouseOver={harmony}>鸿蒙</Button></div>
                </div>
                <div style={{"width": "60%"}}>
                    {platform}
                </div>
            </div>
        </div>
        </>
    )
}

export default Download;