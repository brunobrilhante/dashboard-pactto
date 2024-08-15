import React, { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { PiChatsFill } from "react-icons/pi";
import { BsCollectionPlayFill, BsPersonGear } from "react-icons/bs";
import { IoMdLink, IoMdSettings } from "react-icons/io";
import { FaShoppingBag, FaBars } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdOndemandVideo, MdSubscriptions } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import './style.css'
import Logo from '../../assets/pactto-logo.svg'

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <IoHome />
        },
        {
            path: "/chats",
            name: "Pactto Chats",
            icon: <PiChatsFill />
        },
        {
            path: "/videos-to-review",
            name: "Items to review",
            icon: <BsCollectionPlayFill />
        },
        {
            path: "/shared-links",
            name: "Web links you created",
            icon: <IoMdLink />
        },
        {
            path: "/personal-info",
            name: "Personal information",
            icon: <BsPersonGear />
        },
        {
            path: "/packages",
            name: "Review packages for sale",
            icon: <FaShoppingBag />
        },
        {
            path: "/profile",
            name: "Pactto website",
            icon: <CgWebsite />
        },
        {
            path: "/library",
            name: "Reference video library",
            icon: <MdOndemandVideo />
        },
        {
            path: "/subscription",
            name: "Subscription",
            icon: <MdSubscriptions />
        },
        {
            path: "/review-settings",
            name: "Review Settings",
            icon: <IoMdSettings />
        }
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }}><img className="logo" src={Logo} alt="Logo Pactto" /></h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;