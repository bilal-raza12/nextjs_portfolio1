
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className='footer-container'>
            <div className='footer-section'>
                <div className='footer-details '>
                    <h2 className='footer-title'>
                         Muhammad Bilal Raza
                    </h2>
                    <div className='contact-info'>
                            <Link href={"mailto:ibilalraz@gmail.com"}>
                               <FaEnvelope className='mt-1'/>
                            </Link>
                            <p className='contact-info-item'>ibilalraz@gmail.com</p>
                    </div>
                    <div className='contact-info'>
                            <Link href={"/"}>
                               <FaPhone className='mt-1'/>
                            </Link>
                            <p className='contact-info-item'>+92 347177 9991</p>
                    </div>
                    <div className='contact-info'>
                            <Link href={"/"}>
                               <FaMapMarkerAlt className='contact-info-item'/>
                            </Link>
                            <p className='mb-2'>House no# 16//15 sheet#17 model colony Karachi, Pakistan</p>
                    </div>
                </div>
                <div className='social-media'>

                <div className='social-media-title'>Social Media Handles</div>
                <div className='social-media-icons'>
                        <Link href={"https://www.linkedin.com/in/bilal-raza-83086025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="social-media-icon">
                            <FaLinkedin />
                        </Link>
                        <Link href={"https://www.facebook.com/profile.php?id=100027854330341&mibextid=ZbWKwL"} className="social-media-icon">
                            <FaFacebook />
                        </Link>
                        <Link href={"https://github.com/bilal-raza12"} className="social-media-icon">
                            <FaGithub />
                        </Link>
                        <Link href={"mailto:ibilalraz@gmail.com"} className="social-media-icon">
                            <IoMdMail />
                        </Link>
                </div>
                </div>

                <div className='footer-links'>
                    <Link href={"/"} className='footer-link'>
                    Home

                    </Link>
                    <Link href={"/"} className='footer-link'>
                    About
                    </Link>
                    <Link href={"/"} className='footer-link'>
                    Projects
                    </Link>
                    <Link href={"/"} className='"footer-link'>
                    Contact
                    </Link >
                </div>

            </div>
                <div className='footer-copy'>
                    &copy; Muhammad Bilal Raza | All Rights Reserved.
                </div>
    </footer>
  )
}

export default Footer