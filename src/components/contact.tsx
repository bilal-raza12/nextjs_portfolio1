import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
        <h2 className='contact-title'>
           Contact me
        </h2>
        <form action="" className='contact-form' >
            <div className='.form-group'>
                <label htmlFor="name" >Name:</label>
                <input type="text" id='name'  placeholder=' Enter Your Name' required/>
            </div>
            <div>
                <label htmlFor="email" >Email:</label>
                <input type="email" id='email'  placeholder=' Enter Your Email Address' required/>
            </div>
            <div>
                <label htmlFor="message" >Message:</label>
                <textarea  id='message'  placeholder='Write Your Message' rows={6} cols={30} required/>
            </div>
            <div>
                <button className='contact-btn'>Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default Contact