
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Hero = () => {
  return (
    <div className='herocontainer'>
        <div className='hero-text '>
          
            <p className='intro '>
              Hi I&apos;m
            </p>
            <h1 className='name '>
              Muhammad Bilal Raza
            </h1>
            <p className='description'>
              A passionate Front-End-Developer creating beautiful and functional web experiences.
            </p>
            <ul className='social-icons'>
              <li ><Link href={"https://www.linkedin.com/in/bilal-raza-83086025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}><FaLinkedin/></Link></li>
              <li><Link href={"https://www.facebook.com/profile.php?id=100027854330341&mibextid=ZbWKwL"}><FaFacebook/></Link></li>
              <li ><Link href={"https://github.com/bilal-raza12"}><FaGithubSquare/></Link></li>
              <li><Link href={"mailto:ibilalra@gmail.com"}><IoMdMail/></Link></li>

            </ul>

          <Link href={"/"}>
            <button className="hire-me-btn">
              Hire Me
            </button>
          </Link>
        </div>
        <div className='profilepic'>
            <div className='piccontainer'>
                 <Image src={"/images/profilepic.jpeg"} alt="" width={300} height={310} className='md:mr-7  '></Image>
            </div>
        </div>
    </div>
  )
}

export default Hero