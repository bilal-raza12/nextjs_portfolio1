
import Image from 'next/image'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-section'>
        <div className='about-pic-container' >
            <Image src="/images/aboutpic.jpeg" alt=""
            width={500} height={500} className=''/>
        </div>
        <div className='about-content'>
          <h1 className='about-title '>
            About Me
          </h1>
          <p className='about-text '>
            Hi! I am <span className="text-[#f65353] font-semibold">Muhammad Bilal Raza</span> a Front End Developer who loves bilding userfriedly and responsive websites.I work with modern tools like React, Nextjs and Tailwind CSS to turn ideas into functional use functional and interactive web pages. I also have agood command on buildingan interactive UI. 
            <p className='text-[20px] leading-relaxed mt-2'>
              My goal is to ceate web experience that are not good looking but also easy to use. I am always learning new techniques to improve my skills and deliver the best result that meets the desired requirements.
              </p>
              <p className='text-[20px] leadning-relaxed mt-2'>
                Lets work together to build a great websites and have godd expereince with UI/UX!
              </p>
          </p>
        </div>

      </div>
    </div>
  )
}

export default About