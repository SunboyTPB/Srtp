import { Button, List, ListSubheader,  ListItemButton, ListItemText, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from "@mui/material";
import {React, useState} from "react";
import "./Theme.css";

function Home() {
    const [contentTitle, setContentTitle] = useState("公司简介");
    const chooseforcontent = (event) => {
        setContentTitle(event.target.id);
    }

    const [openLogin, setOpenLogin] = useState(false);
    const handlecloseLogin = () => {
        setOpenLogin(false);
    }

    const handleopenLogin = () => {
        setOpenLogin(true);
    }

    const [openSignup, setOpenSignup] = useState(false);
    const handlecloseSignup = () => {
        setOpenSignup(false);
    }
    const handleopenSignup = () => {
        setOpenSignup(true);
    }
    const LogintoSignup = () => {
        setOpenLogin(false);
        setOpenSignup(true);
    }
    return (
        <>
        <div className="home">
            <div className="login" style={{"paddingLeft": "10px", "paddingTop": "10px"}}>
                <p onClick={handleopenLogin} className="link" style={{"width": "50px"}}>登录</p>
            </div>
            <div className="logo" style={{"textAlign": "center"}}>
                <h1 style={{"paddingTop": "200px", "color": "white", "position": "absolute", "margin": "auto", "left": 0, "right": 0}}>SRTP项目组题目测试</h1>
            </div>
            <div className="buttons" style={{"textAlign": "center"}}>
                <Button variant="contained" style={{"marginRight": "10%"}}>安卓</Button>
                <Button variant="contained" style={{"marginRight": "10%"}}>苹果</Button>
                <Button variant="contained">网页</Button>
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
        <Dialog open={openLogin}>
            <DialogTitle>
                登录
            </DialogTitle>
            <DialogContent>
                <DialogContentText>您好，请您登录SRTP账号！</DialogContentText>
                <TextField fullWidth style={{"marginTop": "10px", "marginBottom": "10px"}} label="手机号" />
                <TextField fullWidth label="密码" />
            </DialogContent>
            <DialogActions>
                <Button onClick={handlecloseLogin}>取消</Button>
                <Button onClick={LogintoSignup}>进入注册</Button>
                <Button>登录</Button>
            </DialogActions>
        </Dialog>
        <Dialog open={openSignup}>
            <DialogTitle>
                注册
            </DialogTitle>
            <DialogContent>
                <DialogContentText>您好，请注册SRTP账号！</DialogContentText>
                <TextField fullWidth label="用户名" style={{"marginTop": "10px"}} />
                <TextField fullWidth label="手机号" style={{"marginTop": "10px"}} />
                <TextField fullWidth label="验证码" style={{"marginTop": "10px"}} />
                <TextField fullWidth label="密码" style={{"marginTop": "10px"}} />
                <TextField fullWidth label="确认密码" style={{"marginTop": "10px"}} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handlecloseSignup}>取消</Button>
                <Button>注册</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default Home;