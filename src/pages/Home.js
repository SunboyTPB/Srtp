import { Button, List, ListSubheader,  ListItemButton, ListItemText, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from "@mui/material";
import {React, useEffect, useState} from "react";
import "./Theme.css";
import Title from "./Title";

function Home() {
    const [imagenumber, setImagenumber] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            if(imagenumber < 5) {
                setImagenumber(imagenumber + 1);
            } else {
                setImagenumber(0);
            }
        }, 5000)
    })
    return (
        <>
        <Title />
        <div style={{"display": "flex", "width": "100%", "height": "400px"}}>
            <div style={{"width": "60%"}}>
                {imagenumber}
            </div>
            <div style={{"width": "40%"}}>
                <Button fullWidth>Test News 1</Button>
                <Button fullWidth>Test News 2</Button>
                <Button fullWidth>Test News 3</Button>
                <Button fullWidth>Test News 4</Button>
                <Button fullWidth>Test News 5</Button>
                <Button fullWidth>Test News 6</Button>
                <Button fullWidth>Test News 7</Button>
                <Button fullWidth>Test News 8</Button>
                <Button fullWidth>Test News 9</Button>
                <Button fullWidth>Test News 10</Button>
                <Button fullWidth>Test News 11</Button>
            </div>
        </div>
        <div style={{"fontWeight": "bolder", "fontSize": "35px", "marginLeft": "50px", "marginTop": "20px"}}>公司近期活动</div>
        <div style={{"width": "100%", "height": "500px", "display": "flex", "overflowX": "scroll"}}>
            <div style={{"marginLeft": "10px", "width": "400px", "height": "100%"}}>NEWS</div>
            <div style={{"marginLeft": "10px", "width": "400px", "height": "100%"}}>NEWS</div>
            <div style={{"marginLeft": "10px", "width": "400px", "height": "100%"}}>NEWS</div>
            <div style={{"marginLeft": "10px", "width": "400px", "height": "100%"}}>NEWS</div>
            <div style={{"marginLeft": "10px", "width": "400px", "height": "100%"}}>NEWS</div>
            <div style={{"marginLeft": "10px", "width": "400px", "height": "100%"}}>NEWS</div>
            <div style={{"marginLeft": "10px", "width": "400px", "height": "100%"}}>NEWS</div>
            <div style={{"marginLeft": "10px", "width": "400px", "height": "100%"}}>NEWS</div>
            <div style={{"marginLeft": "10px", "width": "400px", "height": "100%"}}>NEWS</div>
            <div style={{"marginLeft": "10px", "width": "400px", "height": "100%"}}>NEWS</div>
            <div style={{"marginLeft": "10px", "width": "400px", "height": "100%"}}>NEWS</div>
        </div>
        </>
    )
}

export default Home;