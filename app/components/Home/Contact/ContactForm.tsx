import React from 'react'

const ContactForm = () => {
  return (
    <div className='rounded-lg p-4 sm:p-10'>
      <h1 className='text-2xl md:text-3xl lg:text-[2.5rem] font-bold'> Contact Me</h1>

      <form className='mt-8 block w-full overflow-hidden'>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <input type='text' placeholder="First name" className='flex-1 bg-[#99b2b9] text-black opacity-70
            placeholder:text-black px-6 py-3 rounded-md border-[1.5px] border-grey-200 border-opacity-15 outline-none w-full'></input>

            <input type='text' placeholder="Last name" className='flex-1 bg-[#99b2b9] text-black opacity-70
            placeholder:text-black px-6 py-3 rounded-md border-[1.5px] border-grey-200 border-opacity-15 outline-none w-full'></input>
        </div>

        <div className="mt-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <input type='email' placeholder="Email address" className='flex-1 bg-[#99b2b9] text-black opacity-70
            placeholder:text-black px-6 py-3 rounded-md border-[1.5px] border-grey-200 border-opacity-15 outline-none w-full'></input>

            <input type='text' placeholder="Phone number" className='flex-1 bg-[#99b2b9] text-black opacity-70
            placeholder:text-black px-6 py-3 rounded-md border-[1.5px] border-grey-200 border-opacity-15 outline-none w-full'></input>
        </div>


        <textarea rows={7} placeholder='Message' className='mt-5 bg-[#99b2b9] w-full text-black opacity-70 placeholder:text-grey-600 px-6 py-3 rounded-md border-[1.5px] border-grey-200 border-opacity-15 outline-none'>

        </textarea>

        <div className="mt-4">
            <button className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg 
              transition-all duration-200 rounded-lg mt-8 bg-[#cb9398] hover:bg-[#F2F3F4] hover:text-black
              flex items-center space-x-2'>Send Message</button>
        </div>

      </form>
    </div>
  )
}

export default ContactForm
