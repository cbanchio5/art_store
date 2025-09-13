import React from 'react'

import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='pt-16 pb-16' id="contact">
        <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
            {/* Contact Form */}
               <div className="">
                <ContactForm />
               </div>

            {/* Contact Info */}
            <div className="xl:mx-auto">
                <ContactInfo />
            </div>


        </div>
      
    </div>
  )
}

export default Contact
