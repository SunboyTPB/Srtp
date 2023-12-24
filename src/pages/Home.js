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
            <div style={{"width": "25%", "marginLeft": "10px", "height": "100%", "flexShrink": 0}}>TEST</div>
            <div style={{"width": "25%", "marginLeft": "10px", "height": "100%", "flexShrink": 0}}>TEST</div>
            <div style={{"width": "25%", "marginLeft": "10px", "height": "100%", "flexShrink": 0}}>TEST</div>
            <div style={{"width": "25%", "marginLeft": "10px", "height": "100%", "flexShrink": 0}}>TEST</div>
            <div style={{"width": "25%", "marginLeft": "10px", "height": "100%", "flexShrink": 0}}>TEST</div>
            <div style={{"width": "25%", "marginLeft": "10px", "height": "100%", "flexShrink": 0}}>TEST</div>
            <div style={{"width": "25%", "marginLeft": "10px", "height": "100%", "flexShrink": 0}}>TEST</div>
        </div>
        </>
    )
}

export default Home;