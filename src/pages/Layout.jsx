import '../custom.scss'
import '../css/custom.min.css'

import React from 'react-bootstrap'; 
import {Outlet} from 'react-router-dom'; 
import Navbar from "../Navbar";

const Layout = () => 
    {   
        return (     
            <><Navbar /><Outlet /></>   
        ); 
    }; 
export default Layout;