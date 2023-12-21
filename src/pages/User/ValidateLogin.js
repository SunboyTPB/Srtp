import React from "react";
import "../Theme.css";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ValidateLogin() {
    const navigate = useNavigate();

    const signup = () => {
        navigate("/signup")
    }
    const theme = createTheme({
        palette: {
            primary: {
                main: "#693d3d"
            }
        }
    })
    return (
        <>
        <div style={{"fontFamily": "Siyuansong", "marginTop": "10%"}}>手机号</div>
        <div style={{"marginTop": "10px"}}>
            <input style={{"borderRadius": "51px", "border": "None", "paddingLeft": "10px", "paddingRight": "10px", "paddingTop": "10px", "paddingBottom": "10px", "width": "80%", "backgroundColor": "#EEEEEE"}} />
        </div>
        <div style={{"marginTop": "10px", "fontFamily": "Siyuansong"}}>验证码</div>
        <div style={{"marginTop": "10px"}}>
            <ThemeProvider theme={theme}>
                <input style={{"borderRadius": "51px", "border": "None", "paddingLeft": "10px", "paddingRight": "10px", "paddingTop": "10px", "paddingBottom": "10px", "width": "60%", "backgroundColor": "#EEEEEE", "marginRight": "10px"}} />
                <Button style={{"fontFamily": "Siyuansong"}}>获取验证码</Button>
            </ThemeProvider>
        </div>
        <div>
            <a style={{"fontSize": "10px", "fontFamily": "Siyuansong"}} className="link">未收到验证码？</a>
        </div>
        <div style={{"display": "flex", "flexDirection": "column"}}>
            <button className="classicButton" style={{"fontFamily": "Siyuansong", "marginTop": "10px", "width": "150px"}}>立即登录</button>
            <a style={{"fontSize": "10px", "fontFamily": "Siyuansong", "width": "150px"}} className="link" onClick={signup}>没有账号？注册账号</a>
        </div>
        </>
    )
}

export default ValidateLogin;