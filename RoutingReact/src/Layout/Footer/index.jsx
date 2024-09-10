import React from 'react'
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import './index.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className='icons'>
                <FaTwitter />
                <FaFacebookF />
                <FaGithub />
            </div>
            <div className="text">
                <p>Copyright © Your Website 2023</p>
            </div>
        </div>
    )
}

export default Footer
