//我这边添加了新的模块，请使用npm install将所有模块更新安装之后再运行npm start!

import { Button, List, ListSubheader,  ListItemButton, ListItemText, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from "@mui/material";
import {React, useEffect, useState} from "react";
import "./Theme.css";
import Title from "./Title";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import EventIcon from '@mui/icons-material/Event';


function Home() {
    return (
        <>
        <Title />
        <div style={{"display": "flex", "width": "100%", "height": "400px"}}>
            <div style={{"width": "60%"}}>
                <Swiper style={{"width": "100%", "height": "100%"}} spaceBetween={50} centeredSlides={true} autoplay={{delay: 2500, disableOnInteraction: false}} pagination={{clickable: true}} navigation={true} modules={[Autoplay, Pagination, Navigation]}>
                    <SwiperSlide style={{"width": "100%", "height": "100%"}}>
                        <img src={require("../media/demonews/demonews0.png")} style={{"width": "100%", "height": "100%"}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={require("../media/demonews/demonews1.png")} style={{"width": "100%", "height": "100%"}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={require("../media/demonews/demonews2.png")} style={{"width": "100%", "height": "100%"}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={require("../media/demonews/demonews3.png")} style={{"width": "100%", "height": "100%"}} />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div style={{"width": "40%"}}>
                <Button style={{"height": "25%", "fontSize": "20px", "backgroundColor": "#693D3D"}} variant="contained" fullWidth startIcon={<EventIcon />}>公司近期活动</Button>
                <Button style={{"height": "25%", "fontSize": "20px", "backgroundColor": "#693D3D"}} variant="contained" fullWidth startIcon={<ShoppingBagIcon />}>交易管理</Button>
                <Button style={{"height": "25%", "fontSize": "20px", "backgroundColor": "#693D3D"}} variant="contained" fullWidth startIcon={<InfoIcon />}>关于公司</Button>
                <Button style={{"height": "25%", "fontSize": "20px", "backgroundColor": "#693D3D"}} variant="contained" fullWidth startIcon={<SystemUpdateAltIcon />}>客户端下载</Button>
            </div>
        </div>
        <div style={{"fontWeight": "bolder", "fontSize": "35px", "marginLeft": "50px", "marginTop": "20px"}}>公司近期活动</div>
        <div style={{"width": "100%", "height": "500px", "display": "flex", "overflowX": "scroll", "marginTop": "20px"}}>
            <div style={{"width": "400px", "marginLeft": "10px", "height": "100%", "flexShrink": 0}}>TEST</div>
            <div style={{"width": "400px", "marginLeft": "10px", "height": "100%", "flexShrink": 0}}>TEST</div>
            <div style={{"width": "400px", "marginLeft": "10px", "height": "100%", "flexShrink": 0}}>TEST</div>
            <div style={{"width": "400px", "marginLeft": "10px", "height": "100%", "flexShrink": 0}}>TEST</div>
            <div style={{"width": "400px", "marginLeft": "10px", "height": "100%", "flexShrink": 0}}>TEST</div>
            <div style={{"width": "400px", "marginLeft": "10px", "height": "100%", "flexShrink": 0}}>TEST</div>
            <div style={{"width": "400px", "marginLeft": "10px", "height": "100%", "flexShrink": 0}}>TEST</div>
        </div>
        </>
    )
}

export default Home;