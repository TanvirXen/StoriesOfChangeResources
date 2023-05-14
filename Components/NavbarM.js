import React, { useState } from "react";
import {Container, Row, Col, Button } from "react-bootstrap";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Topbar from "../Components/Topbar"
function NavbarM() {

    const [open, setopen] = useState(false);
    return(
        <div >
        <div className="hamburger">
            <div style={{ paddingLeft: "12px",cursor:'pointer',paddingTop:'10px' }}>
                <Image src='/images/logo.svg' alt="" height={30} width={80}  onClick={()=>Router.push({ pathname: '/'})} />
            </div>
            <div style={{ paddingRight: "24px",paddingTop:'6px'}} onClick={() => setopen(true)}>
                <MenuIcon fontSize='large'/>
            </div>
        </div>
        <Drawer anchor="right" open={open}>
            <Box role="presentation" onClick={() => setopen(false)} sx={{width:'100vw',height:'100vh'}} style={{backgroundColor:'#000000'}}>
            <Topbar/>
            <div className="hamburgera">
            <div style={{ paddingLeft: "12px",cursor:'pointer',paddingTop:'10px' }}>
                <Image src='/images/logow.svg' alt="" height={30} width={80}  onClick={()=>Router.push({ pathname: '/'})} />
            </div>
            <div style={{ paddingRight: "24px",paddingTop:'6px'}} onClick={() =>  setopen(false)}>
            <MenuOpenIcon fontSize='large' color='primary'/>
            </div>
        </div>
<div className="ham">

<ul>
                                <li>
                                <Link href="/">Home</Link>
                                </li>
                                <li>
                                <Link href="/work">Work</Link>
                                </li>
                                <li>
                                <Link href="/services">Services</Link>
                                </li>
                                <li>
                                <Link href="/careers">Careers</Link>
                                </li>
                                <li>
                                <Link href="/research">R&D</Link>
                                </li>
                                <li>
                                <Link href="/about">About</Link>
                                </li>
                            </ul>
</div>
<div style={{width:'200px',paddingTop:'60px',paddingLeft:'12px'}}>
    <p className="heading3" style={{color:'#fff'}}>We help you solve your problems</p>
    <div className="SbuttonBlack" style={{width:'144px',height:'42px',textAlign:'center',marginTop:'28px'}}><p className='bytton1' style={{color:'#ffffff'}}>Get in touch</p></div>
</div>
            </Box>
        </Drawer>
    </div>
    );
}

export default NavbarM;