import React from "react";
import "./Theme.css";

function PasswordLogin() {
    return (
        <>
        <div style={{}}>账号</div>
        <div style={{"marginTop": "10px"}}>
            <input style={{"borderRadius": "51px", "border": "None", "paddingLeft": "10px", "paddingRight": "10px", "paddingTop": "10px", "paddingBottom": "10px", "width": "80%", "backgroundColor": "#EEEEEE"}} />
        </div>
        <div style={{"marginTop": "10px"}}>密码</div>
        <div style={{"marginTop": "10px"}}>
            <input style={{"borderRadius": "51px", "border": "None", "paddingLeft": "10px", "paddingRight": "10px", "paddingTop": "10px", "paddingBottom": "10px", "width": "80%", "backgroundColor": "#EEEEEE"}} />
        </div>
        <div>
            <a style={{"fontSize": "10px"}} className="link">密码丢失？找回账号</a>
        </div>
        <div>
            <button className="classicButton">立即登录</button>
        </div>
        </>
    )
}

export default PasswordLogin;