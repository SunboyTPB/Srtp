import React from "react";
import "../Theme.css";
import { Button, createTheme, ThemeProvider } from "@mui/material";

function ForgetPassword() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#693d3d"
            }
        }
    })
    return (
        <>
        <div style={{"height": "100vh", "backgroundColor": "#693D3D"}}>
            <div style={{"fontFamily": "Siyuansong", "width": "40%", "height": "550px", "position": "absolute", "margin": "auto", "left": 0, "right": 0, "top": 0, "bottom": 0, "backgroundColor": "white", "boxShadow": "black 0px 0px 10px", "borderRadius": "10px", "display": "flex", "justifyContent": "center", "alignItems": "center"}}>
                <div style={{"width": "90%"}}>
                    <div style={{"marginTop": "10px"}}>手机号</div>
                    <div style={{"marginTop": "10px"}}>
                        <input style={{"borderRadius": "51px", "border": "None", "paddingLeft": "10px", "paddingRight": "10px", "paddingTop": "10px", "paddingBottom": "10px", "width": "95%", "backgroundColor": "#EEEEEE"}} />
                    </div>
                    <div style={{"marginTop": "10px"}}>验证码</div>
                    <div style={{"marginTop": "10px"}}>
                        <ThemeProvider theme={theme}>
                            <input style={{"borderRadius": "51px", "border": "None", "paddingLeft": "10px", "paddingRight": "10px", "paddingTop": "10px", "paddingBottom": "10px", "width": "78%", "backgroundColor": "#EEEEEE", "marginRight": "10px"}} />
                            <Button style={{"fontFamily": "Siyuansong"}}>获取验证码</Button>
                        </ThemeProvider>
                    </div>
                    <div style={{"display": "flex", "justifyContent": "right"}}>
                        <a style={{"fontSize": "10px", "fontFamily": "Siyuansong"}} className="link">未收到验证码？</a>
                    </div>
                    <div style={{"marginTop": "10px"}}>密码设置</div>
                    <div style={{"marginTop": "10px"}}>
                        <input style={{"borderRadius": "51px", "border": "None", "paddingLeft": "10px", "paddingRight": "10px", "paddingTop": "10px", "paddingBottom": "10px", "width": "95%", "backgroundColor": "#EEEEEE"}} />
                    </div>
                    <div style={{"marginTop": "10px"}}>密码确认</div>
                    <div style={{"marginTop": "10px"}}>
                        <input style={{"borderRadius": "51px", "border": "None", "paddingLeft": "10px", "paddingRight": "10px", "paddingTop": "10px", "paddingBottom": "10px", "width": "95%", "backgroundColor": "#EEEEEE"}} />
                    </div>
                    <div style={{"marginTop": "10%", "textAlign": "center"}}>
                        <button className="classicButton" style={{"fontFamily": "Siyuansong"}}>确认</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ForgetPassword;