import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";
import '../css/HomeNavbar.css'


const HomeNavbar = () => {
    return (  
        <div >
            <Menu right  >
                <Link to='/main/portfolio'>포트폴리오</Link>
                <Link to='/main/question'>나에게 맞는 시공업체 찾기</Link>
                <Link to='/main/map'>주변 찾기</Link>
            </Menu>
        </div>
    );
}

export default HomeNavbar;