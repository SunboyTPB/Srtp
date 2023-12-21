import React from "react";
import "../Theme.css";
import { useNavigate } from "react-router-dom";

function PasswordLogin() {
    const navigate = useNavigate();

    const forget = () => {
        navigate("/forgetpassword");
    }
    const signup = () => {
        navigate("/signup")
    }
    return (
        <>
        <div style={{"fontFamily": "Siyuansong", "marginTop": "10%"}}>账号</div>
        <div style={{"marginTop": "10px"}}>
            <input style={{"borderRadius": "51px", "border": "None", "paddingLeft": "10px", "paddingRight": "10px", "paddingTop": "10px", "paddingBottom": "10px", "width": "80%", "backgroundColor": "#EEEEEE"}} />
        </div>
        <div style={{"marginTop": "10px", "fontFamily": "Siyuansong"}}>密码</div>
        <div style={{"marginTop": "10px"}}>
            <input style={{"borderRadius": "51px", "border": "None", "paddingLeft": "10px", "paddingRight": "10px", "paddingTop": "10px", "paddingBottom": "10px", "width": "80%", "backgroundColor": "#EEEEEE"}} />
        </div>
        <div>
            <a style={{"fontSize": "10px", "fontFamily": "Siyuansong"}} className="link" onClick={forget}>密码丢失？找回账号</a>
        </div>
        <div style={{"display": "flex", "flexDirection": "column"}}>
            <button className="classicButton" style={{"fontFamily": "Siyuansong", "marginTop": "10px", "width": "150px"}}>立即登录</button>
            <a style={{"fontSize": "10px", "fontFamily": "Siyuansong", "width": "150px"}} className="link" onClick={signup}>没有账号？注册账号</a>
        </div>
        </>
    )
}

export default PasswordLogin;