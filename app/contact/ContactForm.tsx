'use client'

import React, { useState } from "react";

enum FormField {
  FirstName = "firstName",
  LastName = "lastName",
  Email = "email",
  Phone = "phone",
  Message = "message",
}

type FormValues = Record<FormField, string>;

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    [FormField.FirstName]: "",
    [FormField.LastName]: "",
    [FormField.Email]: "",
    [FormField.Phone]: "",
    [FormField.Message]: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as FormField;
    setFormValues({ ...formValues, [name]: e.target.value });
  };

  // Separate submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormValues({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 sm:p-12">
      <h1 className="text-4xl md:text-5xl font-bold text-[#292929] mb-10 text-center">
        Contact Me
      </h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[FormField.FirstName, FormField.LastName].map((field) => (
            <div key={field} className="relative">
              <input
                type="text"
                name={field}
                value={formValues[field]}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full rounded-xl bg-white px-5 pt-5 pb-2 text-[#292929] text-base 
                  focus:outline-none focus:ring-2 focus:ring-[#cb9398] transition"
              />
              <label
                htmlFor={field}
                className="absolute left-5 top-2.5 text-[#99b2b9] text-sm transition-all 
                  peer-placeholder-shown:top-5 peer-placeholder-shown:text-base 
                  peer-placeholder-shown:text-[#292929]/50"
              >
                {field === FormField.FirstName ? "First Name" : "Last Name"}
              </label>
            </div>
          ))}
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[FormField.Email, FormField.Phone].map((field) => (
            <div key={field} className="relative">
              <input
                type={field === FormField.Email ? "email" : "text"}
                name={field}
                value={formValues[field]}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full rounded-xl bg-white px-5 pt-5 pb-2 text-[#292929] text-base 
                  focus:outline-none focus:ring-2 focus:ring-[#cb9398] transition"
              />
              <label
                htmlFor={field}
                className="absolute left-5 top-2.5 text-[#99b2b9] text-sm transition-all 
                  peer-placeholder-shown:top-5 peer-placeholder-shown:text-base 
                  peer-placeholder-shown:text-[#292929]/50"
              >
                {field === FormField.Email ? "Email Address" : "Phone Number"}
              </label>
            </div>
          ))}
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            name={FormField.Message}
            value={formValues[FormField.Message]}
            onChange={handleChange}
            rows={5}
            placeholder=" "
            className="peer w-full rounded-xl bg-white px-5 pt-5 pb-2 text-[#292929] text-base 
              focus:outline-none focus:ring-2 focus:ring-[#cb9398] transition resize-none"
          />
          <label
            htmlFor={FormField.Message}
            className="absolute left-5 top-2.5 text-[#99b2b9] text-sm transition-all 
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-[#292929]/50"
          >
            Message
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-auto bg-gradient-to-r from-[#cb9398] to-[#99b2b9] 
            hover:from-[#99b2b9] hover:to-[#cb9398] text-white font-semibold py-3 px-8 rounded-2xl shadow-lg 
            transition-all duration-300 text-lg hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
