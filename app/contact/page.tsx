import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="pt-50 pb-12 bg-[#e4ddd9] min-h-screen" id="contact">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 w-[90%] sm:w-[80%] mx-auto items-center">
        {/* Contact Form */}
        <div className="bg-[#e4ddd9] rounded-3xl shadow-2xl  sm:p-12">
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center text-[#292929] space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
          <p className="text-base sm:text-lg">
            I would love to hear from you! Feel free to reach out.
          </p>
          <p>Email: <span className="font-semibold">anaelperrotat@gmail.com</span></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
