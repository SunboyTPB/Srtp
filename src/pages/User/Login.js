import { Box, Tabs, Tab, createTheme, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import PasswordLogin from "./PasswordLogin";
import ValidateLogin from "./ValidateLogin";



function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}
function Login() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#693d3d"
            }
        }
    })
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <>
        <div style={{"height": "100vh", "backgroundColor": "#693D3D"}}>
            <div style={{"width": "50%", "height": "400px", "position": "absolute", "margin": "auto", "left": 0, "right": 0, "top": 0, "bottom": 0, "backgroundColor": "white", "display": "flex", "boxShadow": "black 0px 0px 10px", "borderRadius": "10px"}}>
                <div style={{"width": "40%"}}>

                </div>
                <div style={{"width": "60%"}}>
                    <Box>
                        <ThemeProvider theme={theme}>
                            <Tabs style={{"fontSize": "30px"}} value={value} onChange={handleChange}>
                                <Tab style={{"fontFamily": "Siyuansong"}} label="密码登录" />
                                <Tab style={{"fontFamily": "Siyuansong"}} label="验证码登录" />
                            </Tabs>
                        </ThemeProvider>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <PasswordLogin />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <ValidateLogin />
                    </CustomTabPanel>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;