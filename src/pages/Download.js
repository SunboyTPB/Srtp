import React from "react";
import Title from "./Title";
import { Button } from "@mui/material";

function Download() {
    return (
        <>
        <Title />
        <div style={{"display": "flex", "width": "100%", "height": "100vh"}}>
            <div style={{"width": "60%"}}>

            </div>
            <div style={{"width": "40%"}}>
                <Button>安卓</Button>
                <Button>苹果</Button>
                <Button>鸿蒙</Button>
            </div>
        </div>
        </>
    )
}

export default Download;